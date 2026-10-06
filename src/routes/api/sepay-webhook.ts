import { createFileRoute } from "@tanstack/react-router";
import { PAYMENT_AMOUNT, PAYMENT_CODE_PREFIX } from "@/lib/payment";

type SePayWebhookPayload = {
  id?: string | number;
  gateway?: string;
  accountNumber?: string;
  code?: string | null;
  content?: string;
  transferType?: string;
  transferAmount?: number;
  referenceCode?: string;
};

function toHex(bytes: ArrayBuffer) {
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

async function verifySignature(rawBody: string, timestamp: string, signature: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${rawBody}`));
  return safeEqual(`sha256=${toHex(digest)}`, signature.toLowerCase());
}

export const Route = createFileRoute("/api/sepay-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.SEPAY_WEBHOOK_SECRET;
        const bankAccountNumber = process.env.SEPAY_BANK_ACCOUNT_NUMBER;
        if (!secret || !bankAccountNumber) {
          return Response.json({ success: false, message: "Webhook chưa được cấu hình." }, { status: 503 });
        }

        const rawBody = await request.text();
        const timestamp = request.headers.get("x-sepay-timestamp") ?? "";
        const signature = request.headers.get("x-sepay-signature") ?? "";
        const timestampNumber = Number(timestamp);
        if (!Number.isFinite(timestampNumber) || Math.abs(Date.now() / 1000 - timestampNumber) > 300) {
          return Response.json({ success: false, message: "Yêu cầu đã hết hạn." }, { status: 401 });
        }
        if (!(await verifySignature(rawBody, timestamp, signature, secret))) {
          return Response.json({ success: false, message: "Chữ ký không hợp lệ." }, { status: 401 });
        }

        let payload: SePayWebhookPayload;
        try {
          payload = JSON.parse(rawBody) as SePayWebhookPayload;
        } catch {
          return Response.json({ success: false, message: "Dữ liệu không hợp lệ." }, { status: 400 });
        }

        const paymentCode = payload.code?.toUpperCase() ?? "";
        const validPayment = payload.transferType === "in" &&
          Number(payload.transferAmount) === PAYMENT_AMOUNT &&
          payload.accountNumber === bankAccountNumber &&
          new RegExp(`^${PAYMENT_CODE_PREFIX}\\d{8}$`).test(paymentCode);

        if (validPayment) {
          console.info("SePay payment confirmed", {
            transactionId: payload.id,
            paymentCode,
            referenceCode: payload.referenceCode,
          });
        }

        return Response.json({ success: true });
      },
    },
  },
});
