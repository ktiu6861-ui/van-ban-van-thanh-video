const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

ffmpeg.setFfmpegPath(ffmpegStatic);

const OUTPUT_DIR = path.join(__dirname, '../video-output');
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function taoVideo(options) {
    const { van_ban, ngon_ngu, kieu_nhan_vat, toc_do_thanh } = options;

    try {
        const doanVan = van_ban.split('\n').filter(d => d.trim());
        console.log(`📖 Văn bản có ${doanVan.length} dòng`);

        const timestamp = Date.now();
        const outputFile = path.join(OUTPUT_DIR, `video_${timestamp}.mp4`);
        
        await taoVideoTuHinhTinh(outputFile, doanVan.length);

        console.log(`✅ Video đã được lưu: ${outputFile}`);
        
        return `/video-output/video_${timestamp}.mp4`;

    } catch (error) {
        console.error('❌ Lỗi tạo video:', error);
        throw error;
    }
}

function taoVideoTuHinhTinh(outputFile, duration) {
    return new Promise((resolve, reject) => {
        const videoDuration = Math.max(5, Math.min(duration, 30));
        
        const command = ffmpeg()
            .input(`color=c=yellow:s=800x600:d=${videoDuration}`)
            .inputFormat('lavfi')
            .videoCodec('libx264')
            .fps(30)
            .format('mp4')
            .on('start', () => {
                console.log('🎬 Bắt đầu tạo video...');
            })
            .on('progress', (progress) => {
                if (progress.percent) {
                    console.log('📊 Tiến độ:', Math.round(progress.percent) + '%');
                }
            })
            .on('end', () => {
                console.log('✅ Video tạo xong');
                resolve();
            })
            .on('error', (err) => {
                console.error('❌ Lỗi FFmpeg:', err.message);
                reject(err);
            })
            .save(outputFile);
    });
}

module.exports = { taoVideo };