const request = require('request');
const moeda = process.argv[2];

request('http://api.fixer.io/latest?base=BRL', (error, response, body) => {
    let dados = JSON.parse(body);

    if(!dados.rates[moeda]){
        console.log('Moeda inválida');
    }else{
        console.log(dados.rates[moeda]);
    }
});