require('dotenv').config(); // Cargar variables de entorno
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { obtenerRespuestaBot, guardarConversacion, delay } = require('./utils/botutils');
const loadImageForMessage = require('./utils/loadimageutils');

function initBot(numbers, welcomeMessage, fallbackMessage, io) {
    
    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            headless: false,
            args: ['--no-sandbox']
        }
    });


    const messageImage = loadImageForMessage();

    client.on('qr', (qr) => {
        console.log('Emitiendo QR:', qr);  // Verificar que el QR se emita correctamente
    
        if (io) {
            io.emit('qr', qr);  // Emitir el QR a todos los clientes conectados
            console.log('📸 QR emitido por socket');
        } else {
            qrcode.generate(qr, { small: true });
        }
    });

    client.on('auth_failure', () => {
        console.log('❌ Fallo de autenticación');
        if (io) io.emit('auth_failure');
    });

    client.on('ready', async () => {
        console.log('✅ WhatsApp listo');
        if (io) io.emit('ready');

        for (const number of numbers) {
            const full = number.includes('@c.us') ? number : number + '@c.us';
            try {

                if(messageImage) await client.sendMessage(full, messageImage, { caption: welcomeMessage});
                else await client.sendMessage(full, welcomeMessage);
                
                guardarConversacion(full, 'BOT', welcomeMessage);
                console.log(`📤 Mensaje enviado a ${full}`);
            } catch (err) {
                console.error(`❌ Error enviando a ${full}:`, err.message);
            }
            await delay(15000); // Espera entre mensajes
        }
    });

    client.on('message', async (msg) => {
        const numero = msg.from;
        const texto = msg.body?.toLowerCase().trim();

        if (!texto) return;
        if (msg.fromMe || msg.isGroupMsg) return;

        const numeroBase = numero.replace('@c.us', '');
        const numerosPermitidos = numbers.map(n => n.replace(/@c\.us$/, ''));
        if (!numerosPermitidos.includes(numeroBase)) {
            console.log(`⚠️ Mensaje de número no autorizado: ${numero}`);
            return;
        }

        guardarConversacion(numero, 'USUARIO', msg.body);

        try {

            const respuesta = await obtenerRespuestaBot(msg.body, fallbackMessage);
            await client.sendMessage(numero, respuesta);
            guardarConversacion(numero, 'BOT', respuesta);

            console.log(`💬 Respondido a ${numero}: ${respuesta.substring(0, 50)}...`);
        } catch (err) {

            await client.sendMessage(numero, fallbackMessage);
            guardarConversacion(numero, 'BOT', fallbackMessage);
            guardarConversacion(numero, 'USUARIO', `Error: ${msg.body}`, 'mensajes_error');
            console.error('❌ Error BOT:', err.message);
        }
    });

    console.log('🟡 Inicializando cliente de WhatsApp...');
    client.initialize();
    console.log('✅ Cliente inicializado');
}

module.exports = { initBot };
