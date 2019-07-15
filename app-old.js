const http = require('http');

/*crea el servidor */
http.createServer((rep, res) => {
        res.write('Hola Mundo');
        res.end();
    })
    /*se configura el puerto */
    .listen(9090);


console.log('Escuchando el puerto');