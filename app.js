const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//console.log(argv);

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temperatura }`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }.`
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));

// clima.getClima(-0.1806532, -78.4678382)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));