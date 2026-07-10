import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiStrongWind
} from "react-icons/wi"

function WeatherCard({ weather }) {

 if (!weather) {
  return null
}

  const condition = weather.weather[0].main

const now = new Date()

const currentDate = now.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
})

const currentTime = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
})

return (
  <div className="card">

    <h1>{weather.name}, {weather.sys.country}</h1>

    <p>
      {currentDate} • {currentTime}
    </p>

    <div className="weather-info">

      <div className="weather-icon">
        {condition === "Clear" && <WiDaySunny size={90} />}
        {condition === "Clouds" && <WiCloud size={90} />}
        {condition === "Rain" && <WiRain size={90} />}
        {condition === "Snow" && <WiSnow size={90} />}
        {condition === "Thunderstorm" && <WiThunderstorm size={90} />}
        {condition === "Mist" && <WiFog size={90} />}
        {condition === "Fog" && <WiFog size={90} />}
        {condition === "Wind" && <WiStrongWind size={90} />}
      </div>

      <div className="weather-temp">
        <h2>{weather.main.temp}°C</h2>
        <p>{weather.weather[0].main}</p>
      </div>

    </div>

    <p className="humidity">
      💧 Humidity: {weather.main.humidity}%
    </p>

  </div>
)
}

export default WeatherCard