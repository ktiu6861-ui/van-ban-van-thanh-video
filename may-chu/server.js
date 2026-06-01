const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { taoVideo } = require('./tao-video');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, '../giao-dien')));
app.use('/video-output', express.static(path.join(__dirname, '../video-output')));

app.post('/api/tao-video', async (req, res) => {
    try {
        const { van_ban, ngon_ngu, kieu_nhan_vat, toc_do_thanh } = req.body;

        console.log('📝 Nhận yêu cầu tạo video:');
        console.log('   - Văn bản:', van_ban.substring(0, 50) + '...');
        console.log('   - Ngôn ngữ:', ngon_ngu);
        console.log('   - Kiểu nhân vật:', kieu_nhan_vat);

        if (!van_ban || van_ban.trim().length === 0) {
            return res.json({ 
                thanh_cong: false, 
                thong_bao: 'Văn bản không được để trống' 
            });
        }

        const duong_dan_video = await taoVideo({
            van_ban,
            ngon_ngu,
            kieu_nhan_vat,
            toc_do_thanh
        });

        console.log('✅ Video tạo thành công:', duong_dan_video);

        res.json({
            thanh_cong: true,
            duong_dan_video: duong_dan_video,
            thong_bao: 'Video tạo thành công'
        });

    } catch (error) {
        console.error('❌ Lỗi server:', error);
        res.json({
            thanh_cong: false,
            thong_bao: 'Lỗi: ' + error.message
        });
    }
});

app.get('/api/kiem-tra', (req, res) => {
    res.json({
        trang_thai: 'chạy',
        thong_diep: '🎬 Server chuyển văn bản thành video đang hoạt động'
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../giao-dien/index.html'));
});

app.use((req, res) => {
    res.status(404).json({ loi: 'Không tìm thấy endpoint này' });
});

app.listen(PORT, () => {
    console.log(`\n╔═══════════════════════════════════════════╗\n║  🎬 Chuyển Văn Bản Thành Video           ║\n║  Server đang chạy tại: http://localhost:${PORT}  ║\n║  Mở trình duyệt và truy cập URL trên      ║\n╚═══════════════════════════════════════════╝\n    `);
});

module.exports = app;