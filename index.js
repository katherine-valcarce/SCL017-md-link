const fs = require('fs');
const path = require("path");

module.exports = (dirPath) => {
  return readMyFile(dirPath);
}

const readMyFile = (dirPath) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(dirPath, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data)
    })
  })
}
/* module.exports = () => {
  return new Promise ((resolve, reject) => {
      fs.readdir(route, 'utf8', (err, list) => {
        const isDirectory = fs.lstatSync(route).isDirectory()
        list.forEach(list => {
            let mdFile = path.extname(list);
            if (mdFile == '.md') { 
                mdFile.includes(list);

            }
        })
        resolve (list, isDirectory); 
      })
  })
};*/
