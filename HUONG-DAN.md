# 🎯 Hướng Dẫn Cài Đặt Và Sử Dụng

## 📋 Yêu Cầu Trước

- **Node.js** 14+ (tải từ https://nodejs.org)
- **FFmpeg** (tải từ https://ffmpeg.org/download.html)
- **Git** (tải từ https://git-scm.com)

## 🚀 Cài Đặt Nhanh

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ktiu6861-ui/van-ban-van-thanh-video.git
cd van-ban-van-thanh-video
```

### 2️⃣ Cài Đặt Dependencies

```bash
npm install
```

### 3️⃣ Chạy Server

```bash
npm start
```

Bạn sẽ thấy:
```
╔═══════════════════════════════════════════╗
║  🎬 Chuyển Văn Bản Thành Video           ║
║  Server đang chạy tại: http://localhost:3000  ║
╚═══════════════════════════════════════════╝
```

### 4️⃣ Mở Trình Duyệt

Truy cập: **http://localhost:3000**

## 📖 Hướng Dẫn Sử Dụng

### Bước 1: Nhập Văn Bản
- Nhập nội dung bạn muốn chuyển thành video
- Có thể là kịch bản, câu chuyện, hoặc bất kỳ nội dung nào

### Bước 2: Chọn Cài Đặt
- **Ngôn Ngữ**: Chọn ngôn ngữ phát âm
- **Tốc Độ**: Điều chỉnh tốc độ giọng nói
- **Kiểu Nhân Vật**: Chọn kiểu nhân vật cổ nhân

### Bước 3: Tạo Video
- Nhấn nút "✨ Tạo Video"
- Chờ xử lý (thường mất 1-2 phút)

### Bước 4: Tải Video
- Nhấn "⬇️ Tải Video Xuống"
- Video sẽ được lưu vào máy tính

## ⚙️ Cài Đặt FFmpeg

### Windows:
1. Tải FFmpeg từ https://ffmpeg.org/download.html
2. Giải nén vào thư mục (ví dụ: `C:\ffmpeg`)
3. Thêm vào biến môi trường PATH

### Mac:
```bash
brew install ffmpeg
```

### Linux:
```bash
sudo apt-get install ffmpeg
```

## 🎨 Các Kiểu Nhân Vật

- **👴 Cổ Nhân**: Kiểu trang phục truyền thống với nón
- **🥷 Ninja**: Quân nhân chuyên nghiệp với trang phục đen
- **🧙 Quốc Sư**: Pháp sư với áo dài và mũ cao
- **🥊 Võ Sĩ**: Chiến binh luyện võ

## 🔊 Ngôn Ngữ Hỗ Trợ

- 🇻🇳 Tiếng Việt (vi-VN)
- 🇬🇧 Tiếng Anh (en-US)
- 🇨🇳 Tiếng Trung (zh-CN)
- 🇯🇵 Tiếng Nhật (ja-JP)

## ⚡ Tốc Độ Giọng Nói

- **0.5x**: Rất chậm
- **1.0x**: Bình thường (mặc định)
- **1.5x**: Nhanh
- **2.0x**: Rất nhanh

## 🆘 Khắc Phục Sự Cố

### Lỗi: "Cannot find FFmpeg"
**Giải pháp**: 
- Cài đặt FFmpeg
- Thêm FFmpeg vào PATH của hệ thống

### Lỗi: "Port 3000 already in use"
**Giải pháp**:
```bash
# Chạy trên port khác
PORT=3001 npm start
```

### Video không phát âm
**Giải pháp**:
- Kiểm tra trình duyệt có hỗ trợ Web Speech API không
- Thử ngôn ngữ khác

## 📁 Các File Được Tạo

- `/giao-dien/` - Giao diện web
- `/may-chu/` - Backend server
- `/video-output/` - Video được tạo (tự động tạo)
- `package.json` - Cấu hình project

## 🎬 Ví Dụ

### Ví Dụ 1: Câu Chuyện Cổ
```
Ngày xưa có một vị quốc sư thánh hiền
Người yêu thương dân tộc như chính mình
...
```

### Ví Dụ 2: Kịch Bản
```
Cảnh 1: Võ sĩ gặp kẻ thù
[Vai A]: Hôm nay phải có người phải chết
[Vai B]: Không phải tôi!
...
```

## 💡 Mẹo Để Được Video Tốt Nhất

1. **Văn bản ngắn**: Mỗi đoạn 20-30 từ để hiệu ứng tốt
2. **Tốc độ vừa phải**: 0.8x - 1.2x sẽ rõ ràng nhất
3. **Kiểu nhân vật phù hợp**: Chọn kiểu phù hợp với nội dung
4. **Ngôn ngữ đúng**: Nên dùng tiếng Việt để phát âm chuẩn

## 📞 Hỗ Trợ

- 📧 Gửi issue trên GitHub
- 🐛 Báo lỗi chi tiết để chúng tôi sửa nhanh hơn

## 📜 Giấy Phép

MIT License - Tự do sử dụng cho mục đích cá nhân

---

**Chúc bạn thành công! 🎉**
