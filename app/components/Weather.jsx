import React from 'react';
import WeatherForm from './WeatherForm';

export default class Weather extends React.Component {
    render() {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm/>
            </div>

        );
    }
};
