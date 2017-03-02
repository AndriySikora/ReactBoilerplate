var React = require('react');
var NavComponent = require('NavComponent');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <NavComponent/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;
