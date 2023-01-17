const request = require('request')
const geoCode = (address, callback) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ address +'&appid=f5064bf2b003af21cd4c20afee4f2d33#'

        request({url: url, json:true}, (error, response)=>{
            try{
                if (response.body.message){
                    callback('unable to find location', undefined);
                }
                else{
                    callback('None',{
                        longitude : response.body.coord.lon, 
                        latitude : response.body.coord.lat,
                        location : response.body.name
                    })
                }
            }catch(error){
                callback('unable to connect to weather services', undefined);
            }

        })
    }

module.exports = geoCode