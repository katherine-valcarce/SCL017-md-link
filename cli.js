const mdLinks = require('./index.js');

let path = process.argv[2];
const options = process.argv[3];


mdLinks(path, options)
.then((file) => console.log(file))
.catch(err => console.log('Error al ejecutar', err));