const fs = require('fs');

fs.readdir('./arquivos', (err, arquivos) => {
    let i = 0;
    
    for(let arquivo of arquivos){
        fs.rename(`./arquivos/${arquivo}`, `./arquivos/lontra-${i}.jpg`, () => {
            console.log(`Renomeei o arquivo ${arquivo}`);
        });
        i++;
    }
    
});