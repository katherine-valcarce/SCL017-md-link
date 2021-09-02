const mdLinks = require('./index.js');

let path = process.argv[2];
let firstOption = process.argv[3];
let secondOption = process.argv[4];


let options = {
    validate: false,
    stats: false
};

if (
    (firstOption === "--validate" && secondOption === "--stats") ||
    (firstOption === "--stats" && secondOption === "--validate")
) {
    options.validate = true;
    options.stats = true;
} else if (firstOption === "--validate") {
    options.validate = true;
    options.stats = false;
} else if (firstOption === "--stats") {
    options.validate = false;
    options.stats = true;
} else {
    options.validate = false;
    options.stats = false;
}

mdLinks(path, options)
.then((file) => console.log(file))
.catch(err => console.log('Error al ejecutar', err));