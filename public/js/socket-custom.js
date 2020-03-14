const socket = io();

// LOS ON ES PARA ESCUCHAR

socket.on('connect', () => {
  console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
  console.log('Perdimos la conexion con el server');
});

// LoS EMIT SON PARA ENVIAR INFORMACION

socket.emit(
  'enviarMensaje',
  {
    usuario: 'Carlos',
    mensaje: 'Hola'
  },
  resp => {
    console.log('Respuesta server:', resp);
  }
);

// Escuchar o recibir informacion
socket.on('enviarMensaje', message => {
  console.log(message);
});
