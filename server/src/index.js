import express from 'express';
import socketio from 'socket.io';
import http from 'http';

import router from './router';

const { PORT = 5000 } = process.env;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connect', socket => {
    console.log('¡Tenemos una nueva conexión!', socket);

    socket.on('disconnect', () => {
        console.log('El usuario se ha ido.')
    });
});

server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));