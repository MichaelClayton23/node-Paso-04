const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0]

switch (comando) {
    case 'crear':
        console.log('Crea las tareas');
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Tarea : ' + tarea.descripcion);
        break;
    case 'listar':
        console.log('Lista las tareas');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("============".green);
            console.log(tarea.descripcion);
            console.log('Estado : ', tarea.completado);

        }
        break;
    case 'actualizar ':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log("Borrado : ", borrado.descripcion);
        break;
    default:
        console.log('Por defecto');
}