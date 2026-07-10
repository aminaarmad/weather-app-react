import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog
} from "react-icons/wi"

function Forecast({ forecast }) {

  if (forecast.length === 0) return null

  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  )

  return (
    <div className="forecast">
      <p className="forecast-title">5-Day Forecast</p>

      <div className="forecast-days">
        {dailyForecast.slice(0, 5).map((day) => (
          <div key={day.dt} className="forecast-card">
            <p>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short"
              })}
            </p>
            <div className="forecast-icon">
              {day.weather[0].main === "Clear" && <WiDaySunny size={45} />}
              {day.weather[0].main === "Clouds" && <WiCloud size={45} />}
              {day.weather[0].main === "Rain" && <WiRain size={45} />}
              {day.weather[0].main === "Snow" && <WiSnow size={45} />}
              {day.weather[0].main === "Thunderstorm" && <WiThunderstorm size={45} />}
              {day.weather[0].main === "Mist" && <WiFog size={45} />}
              {day.weather[0].main === "Fog" && <WiFog size={45} />}
            </div>

            <h3>{Math.round(day.main.temp)}°C</h3>
            <p>{day.weather[0].main}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Forecast