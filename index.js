const fs = require('fs');
const route = __dirname;
const path = require("path");

fs.readdir(route, 'utf8', (err, list) => {

  list.forEach(list => {
      let mdFile = path.extname(list);
      const isDirectory = fs.lstatSync(list).isDirectory() 
      console.log(list, isDirectory)
      if (mdFile == '.md') { 
          mdFile.includes(list);
          console.log(list, isDirectory);
      }
  })
})

/*fs.readdir(route,(error, files)=> {
    if(error){
        throw error;
      }
      files.forEach(element => {
        const isDirectory = fs.lstatSync().isDirectory() 
        console.log(isDirectory)
      });
     console.log(files)
})*/