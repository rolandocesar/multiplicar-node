const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';
    console.log('======================='.green);
    console.log(`======Tabla del ${base}======`.green);
    console.log('======================='.green);
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err)
                rejects(err)
            else
                resolve(`tabla-del-${base}-hasta-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}