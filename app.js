const argv = require('./config/yargs').argv;
const { getAddressLatLng } = require('./lugar/lugar');
const clima = require('./clima/clima');
const direccion = argv.direccion;

/* getAddressLatLng(direccion)
    .then(console.log)
    .catch(console.log) */

/* clima.getWeather(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log) */


const getInfo = async(address) => {
    try {
        const location = await getAddressLatLng(address)
        const temp = await clima.getWeather(location.latitud, location.longitud)

        return `El clima de ${address} es de ${temp}°C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${address}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);