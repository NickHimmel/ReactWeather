var React = require('react');
var WeatherForm = require('app/components/WeatherForm.jsx')

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm />
      </div>
    );
  }
});

module.exports = Weather;
