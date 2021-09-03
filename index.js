const fs = require('fs');
const path = require("path");
const markdownLinkExtractor = require('markdown-link-extractor');

module.exports = (dirPath, options) => {
  return readMyFile(dirPath, options);
}

let listMD = [];
let dataMD = '';
let detailsLinks = [];

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
                  const arrayLinks = markdownLinkExtractor(dataMD, true);
                   let link = arrayLinks.href;
                  arrayLinks.filter(link => ~link.href.indexOf("http"));
                    let documentMd = path.basename(listMD[i]);
                    arrayLinks.forEach(link => {
                    detailsLinks.push ({
                      href: link.href,
                      file: documentMd,
                      text: link.text,
                    })
                  })
                }
                resolve(detailsLinks);
              })
            }
        })
      })
}