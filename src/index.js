import fs from 'fs';
import chalk from 'chalk';



function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*.[^\s]*)\)/gm;

    const capturas = [...texto.matchAll(regex)];

    const resultados = capturas.map(captura => ({
        [captura[1]]: captura[2]
    }));
    
    return resultados.length !==0 ? resultados : 'não há links no arquivo';
}



function trataErro(erro){
    console.log(erro);
    //throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
    console.error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

//*** async / await */
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    }catch (erro)  {
        trataErro(erro);
    } //finally {
    //     console.log(chalk.yellow('A operação foi concluída!!'));
    // }
    
}

export default pegaArquivo;

//pegaArquivo('./arquivos/texto.md');


//*** promises com then */
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro);
// }

//****método sincrono */
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }



//pegaArquivo('./resumos/aula1.txt');
// console.log();
// pegaArquivo('./resumos/aula2.txt');


// console.log();
// console.log();
// pegaArquivo('./arquivos/');



//sintaxe expressões regulares
//  \[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*.[^\s]*)\)
