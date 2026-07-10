import {
  WiStrongWind,
  WiThermometer,
  WiFog,
  WiBarometer
} from "react-icons/wi"

function WeatherDetails({ weather }) {
  if (!weather) {
    return null
  }
  return (
    <div className="weather-details">
      <div className="detail-card">
         <WiStrongWind size={40} />
        <h4>Wind</h4>
        <p>{weather.wind.speed} m/s</p>
      </div>
      <div className="detail-card">
         <WiThermometer size={40} />
        <h4>Feels Like</h4>
        <p>{Math.round(weather.main.feels_like)}°C</p>
      </div>
      <div className="detail-card">
          <WiFog size={40} />
        <h4>Visibility</h4>
        <p>{weather.visibility / 1000} km</p>
      </div>
      <div className="detail-card">
          <WiBarometer size={40} />
        <h4>Pressure</h4>
        <p>{weather.main.pressure} hPa</p>
      </div>
    </div>
  )
}
export default WeatherDetails
