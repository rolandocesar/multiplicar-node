const { argv } = require('./config/yargs')
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// let argumento = arv[2];
// let base = argumento.split('=')[1];