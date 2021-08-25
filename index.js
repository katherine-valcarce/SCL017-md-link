const fs = require('fs');
const path = require("path");

module.exports = (dirPath) => {
  return readMyFile(dirPath);
}

let listMD = [];

const readMyFile = (dirPath) => {
  return new Promise ((resolve, reject) => {
    fs.readdir(dirPath, 'utf8', (err, list) => {
        list.forEach(list => {
         let mdFile = path.extname(list);
          if (mdFile == '.md') { 
            listMD.push(list)
              for (let i = 0; i < listMD.length; i++) {
                fs.readFile((listMD[i].toString()), 'utf8', (err, data) => {
                  if (err) reject(err);
                  resolve(data)
                })
              } 
          }
      })
    })
  })
}
