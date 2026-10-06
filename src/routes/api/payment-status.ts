import { createFileRoute } from "@tanstack/react-router";
import { PAYMENT_AMOUNT, PAYMENT_CODE_PREFIX } from "@/lib/payment";

type SePayTransaction = {
  id: string;
  account_number: string;
  transfer_type: "in" | "out";
  amount_in: number;
  transaction_content: string;
  code: string | null;
  reference_number: string;
};

type SePayResponse = {
  status: string;
  data?: SePayTransaction[];
};

const paymentCodePattern = new RegExp(`^${PAYMENT_CODE_PREFIX}\\d{8}$`);

export const Route = createFileRoute("/api/payment-status")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const paymentCode = new URL(request.url).searchParams.get("code")?.toUpperCase() ?? "";
        if (!paymentCodePattern.test(paymentCode)) {
          return Response.json({ error: "Mã thanh toán không hợp lệ." }, { status: 400 });
        }

        const token = process.env.SEPAY_API_TOKEN;
        const bankAccountNumber = process.env.SEPAY_BANK_ACCOUNT_NUMBER;
        if (!token || !bankAccountNumber) {
          return Response.json({ error: "SePay chưa được cấu hình trên máy chủ." }, { status: 503 });
        }

        const params = new URLSearchParams({
          q: paymentCode,
          transfer_type: "in",
          amount_in_min: String(PAYMENT_AMOUNT),
          amount_in_max: String(PAYMENT_AMOUNT),
          per_page: "10",
        });

        try {
          const sepayResponse = await fetch(`https://userapi.sepay.vn/v2/transactions?${params}`, {
            headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
          });
          if (!sepayResponse.ok) {
            console.error("SePay status check failed", sepayResponse.status);
            return Response.json({ error: "Chưa thể kiểm tra giao dịch." }, { status: 502 });
          }

          const payload = (await sepayResponse.json()) as SePayResponse;
          const transaction = payload.data?.find((item) => {
            const content = item.transaction_content?.toUpperCase() ?? "";
            return item.transfer_type === "in" &&
              Number(item.amount_in) === PAYMENT_AMOUNT &&
              item.account_number === bankAccountNumber &&
              (item.code?.toUpperCase() === paymentCode || content.includes(paymentCode));
          });

          return Response.json(
            transaction
              ? { paid: true, transactionId: transaction.id, referenceNumber: transaction.reference_number }
              : { paid: false },
            { headers: { "Cache-Control": "no-store" } },
          );
        } catch (error) {
          console.error("SePay status check error", error);
          return Response.json({ error: "Chưa thể kết nối SePay." }, { status: 502 });
        }
      },
    },
  },
});
