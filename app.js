const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

    geoCode('Boston', (error,data)=>{
        console.log('Error: ', error);
        console.log('Data: ', data);
    })


    forecast(-71.0598, 42.3584, (error,data)=>{
        console.log('Error: ', error);
        console.log('Data: ', data);
    })