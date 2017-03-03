import React from 'react';

export default class WeatherForm extends React.Component{
  render() {
    return (
      <div>
        <form>
          <input type="text"></input>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
}
