import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';


export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Lviv',
            temp: 21
        };
    }
    handleSearch(location) {
      var that = this;
        openWeatherMap.getTemp(location)
            .then(function(temp) {
                  that.setState({location: location, temp: temp});
            }, function(errorMessage) {
                  console.log(errorMessage);
            });
    }
    render() {
        let {temp, location} = this.state;

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={(location) => this.handleSearch(location)}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>

        );
    }
};
