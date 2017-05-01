var React = require('react');
var WeatherForm = require('app/components/WeatherForm.jsx')
var WeatherMessage = require('app/components/WeatherMessage.jsx')
var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
});

module.exports = Weather;
