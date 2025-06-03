const express = require('express');
const multer = require('multer');
const { initBot } = require('./bot');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const upload = multer({ dest: 'uploads/' });
const {limpiarNumero} = require('./utils/botutils');

// Configuración básica
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { success: null, error: null });
});

// Procesar formulario
app.post('/enviar', upload.single('archivo'), async (req, res) => {
    const { mensaje, fallback, numeros: numerosTexto } = req.body;
    let numeros = [];

    try {
        // Procesar números manuales
        if (numerosTexto && numerosTexto.trim().length > 0) {
            numeros = numerosTexto
                .split('\n')
                .map(n => limpiarNumero(n))
                .filter(n => n);
        }

        if (numeros.length === 0) {
            return res.render('index', { success: null, error: 'No se encontraron números válidos' });
        }

        numeros = [...new Set(numeros)]; // Eliminar duplicados
        lanzarBot(numeros, mensaje, fallback);
        res.render('index', { success: '✅ Bot iniciado: Escanea el QR', error: null });

    } catch (err) {
        console.error('Error en /enviar:', err);
        res.render('index', { success: null, error: 'Error al procesar la solicitud' });
    }
});

// Función para iniciar el bot con Socket.IO
function lanzarBot(numeros, mensaje, fallback) {
    initBot(numeros, mensaje, fallback, io);
}



// Iniciar servidor
server.listen(3000, () => {
    console.log('🌐 Servidor escuchando en http://localhost:3000');
});