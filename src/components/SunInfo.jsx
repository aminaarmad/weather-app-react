import { WiSunrise, WiSunset } from "react-icons/wi"
function SunInfo({ weather }) {

if (!weather) {
  return null
}

const sunrise = new Date(
  weather.sys.sunrise * 1000
).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit"
})

const sunset = new Date(
  weather.sys.sunset * 1000
).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit"
})

return (
<div className="sun-container">

  <div className="sun-card sunrise-card">
    <WiSunrise size={55} />

    <div>
      <p>{sunrise}</p>
      <span>Sunrise</span>
    </div>
  </div>

  <div className="sun-card sunset-card">
    <WiSunset size={55} />

    <div>
      <p>{sunset}</p>
      <span>Sunset</span>
    </div>
  </div>

</div>
)
}
export default SunInfo