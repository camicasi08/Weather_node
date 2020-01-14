const axios = require('axios');

const api_key = '0643ea869ce44253a99fc60e1f5b9fd0'

const getWeather = async(lat, long) => {


    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`);
    //console.log(response);
    const data = response.data.main.temp
    return data;
    //console.log(data);
}

module.exports = {
    getWeather
}