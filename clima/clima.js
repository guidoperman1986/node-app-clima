const axios = require('axios');

const getClima = async(lat,lng) =>{    
    //http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ef6ff3990ad89d7ce87d06901df671fa&units=metric`);    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}