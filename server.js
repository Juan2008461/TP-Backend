const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/estado', (req, res) => {
    res.json({
        estado: 'Activo',
        mensaje: 'El servidor funciona correctamente',
        timestamp: new Date().toISOString()
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});