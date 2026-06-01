# 📹 Chuyển Văn Bản Thành Video

Một ứng dụng web toàn chức năng cho phép bạn:
- 🎤 Chuyển văn bản thành giọng nói (Text-to-Speech)
- 🎨 Tạo hình ảnh chuyển động từ văn bản
- 📝 Phân tích kịch bản và chuyển thành video 2D phong cách cổ nhân
- ✨ Hoàn toàn miễn phí

## 🚀 Tính Năng

1. **Chuyển Văn Bản Thành Giọng Nói**
   - Hỗ trợ tiếng Việt, tiếng Anh và nhiều ngôn ngữ khác
   - Điều chỉnh tốc độ, cao độ

2. **Tạo Hình Ảnh Chuyển Động**
   - Vẽ nhân vật cổ nhân tự động
   - Tạo hiệu ứng chuyển động mượt mà

3. **Xuất Video**
   - Tạo video MP4 chất lượng cao
   - Kết hợp âm thanh và hình ảnh

## 📋 Yêu Cầu Hệ Thống

- Node.js 14+
- FFmpeg
- Trình duyệt hiện đại

## 💻 Cài Đặt

```bash
# Clone repository
git clone https://github.com/ktiu6861-ui/van-ban-van-thanh-video.git
cd van-ban-van-thanh-video

# Cài đặt dependencies
npm install

# Chạy server
npm start
```

## 🎯 Cách Sử Dụng

1. Mở http://localhost:3000
2. Nhập văn bản hoặc kịch bản
3. Nhấn "Tạo Video"
4. Chờ xử lý và tải video

## 📂 Cấu Trúc Project

```
van-ban-van-thanh-video/
├── giao-dien/              # Frontend
│   ├── index.html
│   ├── css/
│   │   └── phong-cach.css
│   └── js/
│       ├── am-thanh.js
│       ├── hoat-anh.js
│       └── ung-dung.js
├── may-chu/                # Backend
│   ├── server.js
│   ├── tao-video.js
│   └── phan-tich-kich-ban.js
├── package.json
└── README.md
```

## 📝 Giấy Phép

MIT - Miễn phí sử dụng

## 👤 Tác Giả

ktiu6861-ui
