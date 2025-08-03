import fs from 'fs';
import chalk from 'chalk';

function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    });
}

pegarArquivo('./arquivos/texto.md');

//pegarArquivo('./resumo.txt');
