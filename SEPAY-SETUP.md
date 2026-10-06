# Cấu hình SePay cho doi-ngu-sub-agent.vercel.app

## 1. Tạo API Token

Trong `my.sepay.vn`, mở phần API của công ty và tạo token chỉ có quyền đọc giao dịch. Lưu token ngay khi SePay hiển thị.

## 2. Thêm biến môi trường trên Vercel

Trong Vercel, mở project đang phục vụ `doi-ngu-sub-agent.vercel.app` → Settings → Environment Variables và thêm:

`SEPAY_API_TOKEN` = token vừa tạo

`SEPAY_BANK_ACCOUNT_NUMBER` = số tài khoản BIDV thật đang liên kết với SePay

`SEPAY_WEBHOOK_SECRET` = chuỗi bí mật HMAC đã cấu hình trong webhook SePay

Áp dụng cho Production, Preview và Development, sau đó redeploy website.

## 3. Cấu hình mã thanh toán

Trong SePay: Cấu hình Công ty → Cấu hình chung → Cấu trúc mã thanh toán:

- Tiền tố: `SA`
- Hậu tố tối thiểu: `8`
- Hậu tố tối đa: `8`
- Loại ký tự: Số nguyên
- Trạng thái: Đang hoạt động

## 4. Kiểm thử

1. Điền biểu mẫu trên landing page.
2. Website tạo QR có số Zalo, mã đơn `SA########` và `SUBAGENT999TH`.
3. Chuyển đúng `999.000đ` bằng QR.
4. Trang tự kiểm tra mỗi 5 giây và hiện “Thanh toán thành công”.
5. Meta Pixel chỉ gửi sự kiện `Purchase` sau khi SePay xác nhận giao dịch.

## Cấu hình webhook SePay

- URL: `https://doi-ngu-sub-agent.vercel.app/api/sepay-webhook`
- Sự kiện: Có tiền vào
- Content-Type: `application/json`
- Tài khoản: BIDV đang liên kết
- Chỉ gửi khi có mã thanh toán: Bật
- Lọc theo tiền tố: `SA`
- Xác thực: `HMAC-SHA256`
- Secret Key: dùng cùng giá trị với `SEPAY_WEBHOOK_SECRET` trên Vercel
- Tự động gửi lại: Bật
