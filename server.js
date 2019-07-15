const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

/*obtener el puerto en heroku */
const port = process.env.PORT || 3000;

/*crear un middleware esto se ejcuta cuando el usuario ingrese cualquier URL*/
app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + '/views/parciales');

/*Express HBS */
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    /**para renderizar una pagina elaborada en hbs se llama el app.set y dentro de esta funcion se coloca
     * res.render
     */
    res.render('home', {
        nombre: 'Christian'
    });

    // res.send('Hello World')
});

app.get('/about', function(req, res) {
    res.render('about');
});



app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});