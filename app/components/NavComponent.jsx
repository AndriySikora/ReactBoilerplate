import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, Link} from 'react-router'

var NavComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/">Get Weather</IndexLink>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = NavComponent;
