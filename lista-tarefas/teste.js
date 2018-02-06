const fs = require('fs');

fs.readFile('dados.json', 'utf-8', (err, dadosDoArquivo) => {
    console.log(dadosDoArquivo);
});

console.log('Opa!');