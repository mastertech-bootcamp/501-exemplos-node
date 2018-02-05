let entrada = process.argv[2];
let fs = require('fs');

fs.writeFile('animais.txt', entrada, (err) => {
    if(err){
        console.log(err);
    }

    console.log('Terminei de escrever =D');
});