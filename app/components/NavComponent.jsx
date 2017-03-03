var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory } from 'react-router'

var NavComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav Component</h2>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = NavComponent;
