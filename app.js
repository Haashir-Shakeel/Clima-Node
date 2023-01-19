const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

    const address = process.argv[2]

    if (!address){
        console.log('please provide address');
    }
    
    geoCode(address, (error,data)=>{
        if (error !== 'None'){
            return console.log(error);
        }

        forecast(data.latitude, data.longitude, (error,forecastData)=>{

            if (error!=='None'){
                return console.log(error);
            }
            console.log('Location: ' + data.location);
            console.log('Weather: ', forecastData);
        })

    })


    