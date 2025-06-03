const path = require('path');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');

function loadImageForMessage(){
    const bannerPath = path.resolve(__dirname, '..', 'public', 'banner.png');
    let media = null;

    try {
    const fileData = fs.readFileSync(bannerPath);
    const base64Data = fileData.toString('base64');
    media = new MessageMedia('image/png', base64Data, 'banner.png');
    return media;
    } catch (error) {
        console.error('❌ No se pudo cargar la imagen banner.png:', error.message);
        return media;
    }
}

module.exports = loadImageForMessage;