const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&appid=f5064bf2b003af21cd4c20afee4f2d33#'

request({url: url , json : true}, (error, response) =>{
    // const data = JSON.parse(response.body)
    // console.log(data.main);
    // console.log(response.body);
    try {
        if (response.body.message){
            console.log('unable to find location');
        }
        else{
            console.log('It is currently ' + (parseInt(response.body.main.temp) - 273.00) + ' degrees in Karachi' );

        }

    }catch(error){
        console.log('unable to connect to weather services');
    }
    })