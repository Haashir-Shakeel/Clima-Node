const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude +'&lon='+ longitude +'&appid=f5064bf2b003af21cd4c20afee4f2d33#'

    request({url: url, json: true}, (error, response)=>{
        try{
            if (response.body.message){
                callback('Unable to find Location, Try another', undefined)
            }
            else{
                callback('None', 'It is currently ' + (parseInt(response.body.main.temp) - 273.00) + ' degrees')
            }

        }catch(error){
            callback('Unable to connect to weather services', undefined)
        }
    })
}

module.exports = forecast