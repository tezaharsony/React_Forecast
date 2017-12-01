import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'


class WeatherList extends Component {
  renderWeather(cityData) {
    const CityName = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={ CityName }>
        <td>{ CityName }</td>
        <td><Chart data={temps} color='orange' height={ 120 } width={ 180 } /></td>
        <td><Chart data={pressures} color='red' height={ 120 } width={ 166 } /></td>
        <td><Chart data={humidities} color='yellow' height={ 120 } width={ 148 } /></td>
      </tr>
    )
  }


  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) { // const weather = state.weather
  return { weather } // { weather } == {weather:weather}
}

export default connect(mapStateToProps)(WeatherList)
