const hbs = require('hbs');

/*helper */
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
/*coloca la primera letra en mayuscula */
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});