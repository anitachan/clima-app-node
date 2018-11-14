const axios = require('axios');

const getClima = async(lat, lng) => {

    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7defb3e4192c145aaa71af62fef583dd&units=metric`);

    //console.log(result.data.main);
    if (result.data.main.temp === undefined) {
        throw new Error(`No hay resultados el clima`);
    }

    return result.data.main.temp;

}

module.exports = {
    getClima
}