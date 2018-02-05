let entrada = process.argv[2];
let fs = require('fs');
let texto = '';

for(let i = 0; i < 100; i++){
    texto += `${entrada} `;
}

fs.writeFile('animais.txt', texto, (err) => {
    if(err){
        console.log(err);
    }

    console.log('Terminei de escrever =D');
});