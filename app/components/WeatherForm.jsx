import React from 'react';

export default class WeatherForm extends React.Component {
    onFormSubmit(e) {
      const location = this.refs.location.value;
        e.preventDefault();
        
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }

      return;
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}
