const { io } = require('../index');

io.on('connection', client => {
  console.log('Usuario conectado');

  // Enviar mensaje desde el servidor al cliente
  client.emit('enviarMensaje', {
    user: 'Admin',
    mensaje: 'Bienvenido a la app'
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // Escuchar al cliente
  // envento viene desde cliente con un emit
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);

    // if (message.usuario) {
    //   callback({ resp: 'Todo bien' });
    // } else {
    //   callback({ resp: 'Todo salio mal!!!' });
    // }
  });
});
