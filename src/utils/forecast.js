const  request = require('request')

const forecast = (x, y, callback) => {
    const url = 'https://api.darksky.net/forecast/d019584ef1d57e382257b7c716812f0e/' + x + ',' + y + '?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Low level Error', undefined)
        } else if (body.error){
            callback('Coordinate error', undefined)
        } else {
            callback(undefined, {
                summary:     body.daily.data[0].summary,
                temperature: body.currently.temperature
            })
        }
    })

}



module.exports = forecast