//import { emit } from "cluster";

//comando para establecer la comunicacion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Usuario desconectado');
});


// on estado actual
socket.on('estadoActual', function(resp) {

    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
});