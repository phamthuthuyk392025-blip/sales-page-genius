export const PAYMENT_ACCOUNT = "96247PHAMTHITHUTHUY";

function field(id: string, value: string) {
  return `${id}${value.length.toString().padStart(2, "0")}${value}`;
}

// BIDV beneficiary and transfer service decoded from the supplied VietQR.
export function paymentPayload(zalo: string) {
  const content = `${zalo.trim()} SUBAGENT999TH`;
  const beneficiary = field("00", "970418") + field("01", PAYMENT_ACCOUNT);
  const merchant = field("00", "A000000727") + field("01", beneficiary) + field("02", "QRIBFTTA");
  const payload = "000201010212" + field("38", merchant) + "530370454069990005802VN" + field("62", field("08", content)) + "6304";
  let crc = 0xffff;
  for (const character of payload) {
    crc ^= character.charCodeAt(0) << 8;
    for (let bit = 0; bit < 8; bit++) crc = ((crc << 1) ^ ((crc & 0x8000) ? 0x1021 : 0)) & 0xffff;
  }
  return payload + crc.toString(16).toUpperCase().padStart(4, "0");
}
