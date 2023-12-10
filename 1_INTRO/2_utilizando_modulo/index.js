const fs = require ('fs'); // Importa o módulo fs

fs.readFile('arquivo.txt', 'utf8', (err, data) => { 
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
    
})// Lê o arquivo.txt