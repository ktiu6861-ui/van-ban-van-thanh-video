// ung-dung.js - Ứng dụng chính

class UngDungChinh {
    constructor() {
        this.dang_xu_ly = false;
        this.khoinTao();
    }

    khoinTao() {
        taoHoatAnh.khoinTaoCanvas('canvas');

        document.getElementById('form-tao-video').addEventListener('submit', (e) => {
            e.preventDefault();
            this.taoVideo();
        });

        document.getElementById('toc-do').addEventListener('input', (e) => {
            document.getElementById('hien-thi-toc-do').textContent = e.target.value + 'x';
        });

        document.getElementById('nut-tai-xuong').addEventListener('click', () => {
            this.taiVideoXuong();
        });

        console.log('✅ Ứng dụng đã sẵn sàng');
    }

    async taoVideo() {
        if (this.dang_xu_ly) {
            alert('⏳ Đang xử lý video, vui lòng chờ...');
            return;
        }

        const vanBan = document.getElementById('van-ban').value.trim();
        if (!vanBan) {
            alert('⚠️ Vui lòng nhập văn bản');
            return;
        }

        this.dang_xu_ly = true;
        this.capNhatTienTrinh('Bắt đầu xử lý...', 10);

        try {
            const ngonNgu = document.getElementById('ngon-ngu').value;
            const tocDo = parseFloat(document.getElementById('toc-do').value);
            const kieuNhanVat = document.getElementById('kieu-nhan-vat').value;

            this.capNhatTienTrinh('Phân tích kịch bản...', 20);
            const doanVan = this.phanTichVanBan(vanBan);

            this.capNhatTienTrinh('Tạo hình ảnh chuyển động...', 40);
            await taoHoatAnh.taoHoatAnh(doanVan.length * 10, kieuNhanVat);

            this.capNhatTienTrinh('Tạo âm thanh...', 60);
            await amThanhXuLy.phatAmThanh(vanBan, ngonNgu, tocDo);

            this.capNhatTienTrinh('Tạo video MP4...', 80);
            await this.taoVideoMP4(vanBan, ngonNgu, kieuNhanVat);

            this.capNhatTienTrinh('Hoàn thành!', 100);
            this.dang_xu_ly = false;

        } catch (error) {
            console.error('❌ Lỗi:', error);
            alert('❌ Lỗi: ' + error.message);
            this.capNhatTienTrinh('Có lỗi xảy ra', 0);
            this.dang_xu_ly = false;
        }
    }

    phanTichVanBan(vanBan) {
        return vanBan.split('\n').filter(d => d.trim().length > 0);
    }

    async taoVideoMP4(vanBan, ngonNgu, kieuNhanVat) {
        try {
            const response = await fetch('http://localhost:3000/api/tao-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    van_ban: vanBan,
                    ngon_ngu: ngonNgu,
                    kieu_nhan_vat: kieuNhanVat,
                    toc_do_thanh: 1
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.thanh_cong) {
                const videoUrl = data.duong_dan_video;
                document.getElementById('video-ket-qua').src = videoUrl;
                document.getElementById('video-container').style.display = 'block';
                this.videoUrl = videoUrl;
            } else {
                throw new Error(data.thong_bao || 'Lỗi không xác định');
            }

        } catch (error) {
            console.error('Lỗi tạo video:', error);
            console.log('💡 Gợi ý: Hãy chạy server bằng "npm start"');
        }
    }

    capNhatTienTrinh(thongBao, phanTram) {
        document.getElementById('tien-trinh-text').textContent = thongBao;
        document.getElementById('tien-trinh-bar').style.width = phanTram + '%';
    }

    taiVideoXuong() {
        if (!this.videoUrl) {
            alert('❌ Chưa có video để tải');
            return;
        }

        const link = document.createElement('a');
        link.href = this.videoUrl;
        link.download = `video_${Date.now()}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new UngDungChinh();
});