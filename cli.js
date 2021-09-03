const mdLinks = require('./index.js');
const fetch = require('fetch');
const fetchUrl = fetch.fetchUrl;

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
let status = '';

mdLinks(path, options)
.then((urlArray) => {
    urlArray.forEach(url => {
        fetchUrl(url.href, (err, meta, body)=>{
            if (err) console.log(err);
            if (meta.status == '200'){
                status = 'OK';
            } else {
                status = 'FAIL';
            }
            if (options.validate == true) {
                
                console.log('file:', url.file,'text:',url.text, '-', url.href, 'status:', meta.status, status)
            }
        })
        
    });
})
.catch(err => console.log('Error al ejecutar', err));