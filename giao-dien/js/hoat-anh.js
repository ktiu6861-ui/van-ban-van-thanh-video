// hoat-anh.js - Tạo hình ảnh chuyển động

class TaoHoatAnh {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.frameHienTai = 0;
        this.tongSoFrame = 0;
        this.dung = false;
    }

    khoinTaoCanvas(selector, chieuRong = 800, chieuCao = 600) {
        this.canvas = document.querySelector(selector);
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            document.querySelector('#preview-hoat-anh').appendChild(this.canvas);
        }
        
        this.canvas.width = chieuRong;
        this.canvas.height = chieuCao;
        this.ctx = this.canvas.getContext('2d');
        
        this.veNen();
    }

    veNen() {
        this.ctx.fillStyle = '#FFF8DC';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);

        this.veTrangTriGoc(20, 20);
        this.veTrangTriGoc(this.canvas.width - 40, 20);
        this.veTrangTriGoc(20, this.canvas.height - 40);
        this.veTrangTriGoc(this.canvas.width - 40, this.canvas.height - 40);
    }

    veTrangTriGoc(x, y) {
        this.ctx.fillStyle = '#DAA520';
        for (let i = 0; i < 3; i++) {
            this.ctx.fillRect(x + i * 4, y, 3, 3);
            this.ctx.fillRect(x, y + i * 4, 3, 3);
        }
    }

    veNhanVat(x, y, frame, kieuNhanVat = 'co-nhan') {
        const offset = Math.sin(frame * 0.1) * 5;

        if (kieuNhanVat === 'co-nhan') {
            this.veNhanVatCoNhan(x, y + offset);
        } else if (kieuNhanVat === 'ninja') {
            this.veNhanVatNinja(x, y + offset);
        } else if (kieuNhanVat === 'quoc-su') {
            this.veNhanVatQuocSu(x, y + offset);
        }
    }

    veNhanVatCoNhan(x, y) {
        this.ctx.fillStyle = '#FFD4A3';
        this.ctx.beginPath();
        this.ctx.arc(x, y - 60, 20, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = '#8B0000';
        this.ctx.beginPath();
        this.ctx.moveTo(x - 25, y - 60);
        this.ctx.lineTo(x + 25, y - 60);
        this.ctx.lineTo(x, y - 90);
        this.ctx.fill();

        this.ctx.fillStyle = '#D2691E';
        this.ctx.fillRect(x - 12, y - 40, 24, 40);

        this.ctx.strokeStyle = '#FFD4A3';
        this.ctx.lineWidth = 6;
        this.ctx.beginPath();
        this.ctx.moveTo(x - 12, y - 25);
        this.ctx.lineTo(x - 30, y - 10);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x + 12, y - 25);
        this.ctx.lineTo(x + 30, y - 10);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(x - 8, y + 0, 6, 20);
        this.ctx.fillRect(x + 2, y + 0, 6, 20);
    }

    veNhanVatNinja(x, y) {
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(x, y - 60, 20, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(x - 10, y - 65, 20, 15);

        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.fillRect(x - 12, y - 40, 24, 40);

        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 7;
        this.ctx.beginPath();
        this.ctx.moveTo(x - 12, y - 25);
        this.ctx.lineTo(x - 35, y - 15);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x + 12, y - 25);
        this.ctx.lineTo(x + 35, y - 15);
        this.ctx.stroke();

        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.fillRect(x - 8, y + 0, 6, 25);
        this.ctx.fillRect(x + 2, y + 0, 6, 25);
    }

    veNhanVatQuocSu(x, y) {
        this.ctx.fillStyle = '#FFD4A3';
        this.ctx.beginPath();
        this.ctx.arc(x, y - 60, 22, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = '#FFF';
        this.ctx.beginPath();
        this.ctx.arc(x, y - 65, 25, Math.PI, 0, false);
        this.ctx.fill();

        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.moveTo(x - 28, y - 65);
        this.ctx.lineTo(x + 28, y - 65);
        this.ctx.lineTo(x, y - 95);
        this.ctx.fill();

        this.ctx.fillStyle = '#DAA520';
        this.ctx.fillRect(x - 14, y - 40, 28, 50);

        this.ctx.strokeStyle = '#FFD4A3';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.moveTo(x - 14, y - 30);
        this.ctx.lineTo(x - 38, y - 10);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x + 14, y - 30);
        this.ctx.lineTo(x + 38, y - 10);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(x - 10, y + 10, 8, 25);
        this.ctx.fillRect(x + 2, y + 10, 8, 25);
    }

    taoHoatAnh(frame, kieuNhanVat = 'co-nhan') {
        return new Promise((resolve) => {
            this.frameHienTai = 0;
            this.tongSoFrame = frame;
            this.dung = false;

            const viePhamHoatAnh = () => {
                if (this.frameHienTai >= this.tongSoFrame || this.dung) {
                    resolve();
                    return;
                }

                this.veNen();
                this.veNhanVat(this.canvas.width / 2, this.canvas.height - 100, this.frameHienTai, kieuNhanVat);

                this.ctx.fillStyle = '#8B4513';
                this.ctx.font = '16px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`Frame: ${this.frameHienTai}/${this.tongSoFrame}`, this.canvas.width / 2, 50);

                this.frameHienTai++;
                requestAnimationFrame(viePhamHoatAnh);
            };

            viePhamHoatAnh();
        });
    }

    dungHoatAnh() {
        this.dung = true;
    }
}

const taoHoatAnh = new TaoHoatAnh();