import React from 'react';
import NavComponent from './NavComponent.jsx';

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <NavComponent/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
