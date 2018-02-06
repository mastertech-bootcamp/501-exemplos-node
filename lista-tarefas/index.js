const fs = require('fs');

let tarefa = process.argv[2];
let tarefas;

fs.readFile('dados.json', 'utf-8', (err, dadosDoArquivo) => {
    if(err){
        console.log('Arquivo não existe! Começar do zero.')
        tarefas = [];
    }else{
        console.log('Arquivo existe! Ler dados.')
        tarefas = JSON.parse(dadosDoArquivo);
    }

    console.log('Inserindo nova tarefa: ' + tarefa);
    tarefas.push(tarefa);

    let dadosEmString = JSON.stringify(tarefas);

    fs.writeFile('dados.json', dadosEmString, (err) => {
        if(err){
            console.log(err);
        }
    });
});



