const axios = require('axios');
//const argv = require('../config/yargs').argv;

const api_key = '6c1dc6c215msh7217e3c30f4129ap1e7f7djsn2b15fbda79ee'


const getAddressLatLng = async(address) => {
    console.log(address);
    const direccion = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ direccion }`,
        //imeout: 1000,
        headers: { 'X-RapidAPI-Key': api_key }
    });
    const response = await instance.get();
    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${address} `);
    }
    const data = response.data.Results[0];
    //console.log(data);
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion: dir,
        latitud: lat,
        longitud: lon
    }

}

module.exports = {
    getAddressLatLng
}