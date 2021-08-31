const fs = require('fs');
const path = require("path");
const markdownLinkExtractor = require('markdown-link-extractor');


module.exports = (dirPath) => {
  return readMyFile(dirPath);
}

let listMD = [];
let dataMD = '';

const readMyFile = (dirPath) => {
  return new Promise ((resolve, reject) => {
    fs.readdir(dirPath, 'utf8', (err, list) => {
        list.forEach(list => {
         let mdFile = path.extname(list);
          if (mdFile == '.md') { 
            let pathMd = path.resolve(list)
            listMD.push(pathMd);
          }
      })
          for (let i=0; i<=listMD.length-1; i++) {
             fs.readFile((listMD[i].toString()), 'utf8', (err, data) => {
                if (err)  { 
                  reject(err);
                }else {
                  dataMD += data;
                }
                const links = markdownLinkExtractor(dataMD, false);
                  links.forEach(link => console.log(link));  //devuelve array de los links

                const details = markdownLinkExtractor(dataMD, true);
                  details.forEach(detail => console.log(detail));  //devuelve listado de los links
              })
          }
        })
      })
}
