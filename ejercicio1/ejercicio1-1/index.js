/**
 * 1. Crear un programa que emita dos eventos, el primer evento debe 
 * mostrar su nombre y su película favorita, el segundo evento debe 
 * mostrar su nombre y un comentario (mensaje) de una cosa que ha 
 * aprendido en la materia que antes no.
 */
var events = require('events');

var messageMyself = new events.EventEmitter();

messageMyself.on('anEvent',function(msg){
    console.log(msg);
});

messageMyself.emit('anEvent','\nHello My Name is Alberto Manases Turcios Ortez\n');
messageMyself.emit('anEvent','In this matter I have Learned About to Node.js in how created a web server \n');


/**
 * This exercises have nodemon in the package.json, to run the server
 * you need add this command "npm run dev";
 */