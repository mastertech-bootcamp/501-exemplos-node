const fs = require('fs');

let umNome = process.argv[2];
let umEmail = process.argv[3];

let cliente = {
    nome: umNome,
    email: umEmail
};

fs.readFile('clientes.json', 'utf8', (err, dados) => {
    if(err){
        cadastros = [];
    }else{
        cadastros = JSON.parse(dados);
    }

    cadastros.push(cliente);

    let objetoEmString = JSON.stringify(cadastros);

    fs.writeFile('clientes.json', objetoEmString, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Dados atualizados com sucesso');
            console.log(objetoEmString);
        }
    });
});