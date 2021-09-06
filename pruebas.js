const fs = require('fs');
const path = process.argv[2];


fs.readdir(path, 'utf8', (err, list) => {
    list.forEach(list => {
        let listMD = [];
        const isDirectory = fs.lstatSync(list).isDirectory();
        if( isDirectory == true ) {
            const arrayList = listMD.includes(list);
            if (arrayList==false) {
                listMD.push(list);
            }
            for (let i = 0; i < listMD.length; i++) {
            return fs.readdir((listMD[i].toString()), 'utf8', (err, list) => {
                list.forEach(list => {
                    console.log(list);
                })
            })
          }
        } 
    return list; 
    })
})