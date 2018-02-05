let largura = process.argv[2];
let comprimento = process.argv[3];

if(!largura || !comprimento){
    console.log('Informe uma largura e um comprimento');
}else{
    console.log(`Calculando ${largura}m X ${comprimento}m. O resultado é ${largura * comprimento}m².`);
}

