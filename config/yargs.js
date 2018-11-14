const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        direccion: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

module.exports = {
    argv
}