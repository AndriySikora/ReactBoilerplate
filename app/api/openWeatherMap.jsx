import axios from 'axios';

const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=6625ad41d0c3118ae7327e9906d223a8&units=metric';

module.exports = {
 getTemp: function(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${openWeatherMapUrl}&q=${encodedLocation}`;

    return axios.get(requestUrl)
        .then(function(response) {
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        }).catch(function(err) {
            console.log(err.message);
        });
    }
}
