import fs from 'fs';

import chalk from 'chalk';

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function getArquivo(path){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(path, encoding); 
        console.log(chalk.green(texto))
    }
    catch (erro){
        trataErro(erro)
    }


}


// Promisses usando then

// function getArquivo(path){
//     const encoding = 'utf-8';
//     fs.promises.readFile(path, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch((erro) => trataErro(erro))
// }

// function getArquivo(path){
//     const encoding ='utf-8'
//     fs.readFile(path, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

// getArquivo('./arquivos/texto.md')
getArquivo('./arquivos/texto.m')