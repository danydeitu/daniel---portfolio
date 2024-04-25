const express = require('express');
const path = require('path');

const app = express();

// Configuración de la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Manejador de ruta para cualquier otra solicitud
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html',));
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
