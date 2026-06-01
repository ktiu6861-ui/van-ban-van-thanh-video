// am-thanh.js - Chuyển văn bản thành giọng nói

class AmThanhXuLy {
    constructor() {
        this.dangdang = window.speechSynthesis;
        this.hoanTatCallback = null;
    }

    phatAmThanh(vanBan, ngonNgu = 'vi-VN', tocDo = 1) {
        return new Promise((resolve, reject) => {
            if (!this.dangdang) {
                reject(new Error('Trình duyệt không hỗ trợ Web Speech API'));
                return;
            }

            this.dangdang.cancel();

            const utterance = new SpeechSynthesisUtterance(vanBan);
            utterance.lang = ngonNgu;
            utterance.rate = tocDo;
            utterance.pitch = 1;
            utterance.volume = 1;

            utterance.onend = () => {
                console.log('✅ Phát âm xong');
                resolve();
            };

            utterance.onerror = (error) => {
                console.error('❌ Lỗi phát âm:', error);
                reject(error);
            };

            this.dangdang.speak(utterance);
        });
    }

    dung() {
        this.dangdang.cancel();
    }

    kiemTraHoTro() {
        return !!this.dangdang;
    }
}

const amThanhXuLy = new AmThanhXuLy();