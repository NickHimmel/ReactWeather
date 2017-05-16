var React = require('react');
var WeatherForm = require('app/components/WeatherForm.jsx')
var WeatherMessage = require('app/components/WeatherMessage.jsx')
var openWeatherMap = require('app/api/openWeatherMap.jsx')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function (location) {
    var that = this;

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    })
  },
  render: function () {
    var {temp, location} = this.state;
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
