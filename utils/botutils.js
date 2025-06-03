const fs = require('fs');
const path = require('path');
const natural = require('natural');
const stringSimilarity = require('string-similarity');
const {corpus} = require('./corpus_preguntas'); 

// ==== NLP Preproceso ====
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

// Añadir documentos al modelo TF-IDF
corpus.forEach(item => tfidf.addDocument(item.pregunta));

async function obtenerRespuestaBot(mensajeUsuario, errorMessage ) {
    // Normalizamos el mensaje
    const mensaje = mensajeUsuario.trim().toLowerCase();

    // === Comparación por similitud de texto directo ===
    let mejorCoincidencia = {
        puntuacion: 0,
        respuesta: errorMessage || "⚠️ Lo siento, no tengo una respuesta para eso. Intenta con otra pregunta."
    };

    corpus.forEach(item => {
        const similitud = stringSimilarity.compareTwoStrings(mensaje, item.pregunta.toLowerCase());
        if (similitud > mejorCoincidencia.puntuacion) {
            mejorCoincidencia = { puntuacion: similitud, respuesta: item.respuesta };
        }
    });

    // Si tiene buena similitud (> 0.7), la usamos directamente
    if (mejorCoincidencia.puntuacion >= 0.7) return mejorCoincidencia.respuesta;
    
    // === Si no, respaldamos con TF-IDF ===
    let mejorScore = 0;
    let mejorIndice = -1;

    tfidf.tfidfs(mensaje, (i, score) => {
        if (score > mejorScore) {
            mejorScore = score;
            mejorIndice = i;
        }
    });

    if(mejorCoincidencia.respuesta.includes(errorMessage)) guardarConversacion(new Date().toISOString, 'Usuario', mensaje, 'mensajes_error');

    if (mejorIndice >= 0 && mejorScore > 0.1) return corpus[mejorIndice].respuesta;
    return mejorCoincidencia.respuesta;
}

function guardarConversacion(numero, remitente, mensaje, folder = 'conversaciones') {
    let ruta = "";
    if (folder === 'mensajes_error') ruta = path.join(__dirname, 'mensajes_error');
    else ruta = path.join(__dirname, 'conversaciones');
    
    if (!fs.existsSync(ruta)) fs.mkdirSync(ruta);

    const archivo = path.join(ruta, `chat_${numero.replace('@c.us', '')}.txt`);
    const texto = `[${new Date().toLocaleString()}] ${remitente}: ${mensaje}\n`;

    fs.appendFileSync(archivo, texto, 'utf8');
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Limpiar números
function limpiarNumero(numero) {
    const limpio = String(numero).replace(/\D/g, '');
    if (limpio.length === 10 && limpio.startsWith('3')) return '57' + limpio;
    if (limpio.length === 12 && limpio.startsWith('57')) return limpio;
    return null;
}

module.exports = { obtenerRespuestaBot, guardarConversacion, delay, limpiarNumero };