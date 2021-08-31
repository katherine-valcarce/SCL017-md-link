const mdLinks = require('./index.js');

let path = process.argv[2];


mdLinks(path)
.then((file) => console.log(file))
.catch(err => console.log('Error al ejecutar', err));