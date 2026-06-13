import "./App.css"
import { useState, useEffect } from "react"

import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import Forecast from "./components/Forecast"
import SunInfo from "./components/SunInfo"
import WeatherDetails from "./components/WeatherDetails"
import TipsOfDay from "./components/TipsOfDay"
import Greeting from "./components/Greeting"
import WeatherMap from "./components/WeatherMap"

import sunny from "./assets/videos/sunny.mp4"
import cloudy from "./assets/videos/cloudy.mp4"
import rain from "./assets/videos/rain.mp4"
import snow from "./assets/videos/snow.mp4"

import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'

function BackgroundVideo({ video }) {
  if (!video) return null
  return (
    <video key={video} autoPlay loop muted className="bg-video">
      <source src={video} type="video/mp4" />
    </video>
  )
}

function App() {
  const [weather, setWeather] = useState(null)
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [forecast, setForecast] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  
 function changeVideo(weather) {

  const condition = weather.weather[0].main
  const temp = weather.main.temp

  if (condition === "Clear") {
    setVideo(sunny)
  }

  else if (condition === "Clouds") {

    if (temp >= 20) {
      setVideo(sunny)
    } else {
      setVideo(cloudy)
    }

  }
  else if (condition === "Rain") {
    setVideo(rain)
  }
  else if (condition === "Snow") {
    setVideo(snow)
  }
}

  useEffect(() => {
  if (weather) {
    console.log(weather.weather[0].main)
    changeVideo(weather)
  }
}, [weather])

  return (
    <div className={`app ${video ? "video-active" : ""}`}>
      <BackgroundVideo video={video} />

    <div className={`search-container ${!weather ? "centered" : "top"}`}>
      <SearchBar
        setWeather={setWeather}
        setLoading={setLoading}
        loading={loading}
        setForecast={setForecast}
        recentSearches={recentSearches}
        setRecentSearches={setRecentSearches}
      />
      {!weather && (
          <p className="typing-text">Search for a city to discover the weather...</p>
        )}
      </div>

       {weather && (
      <div className="main-grid">
        <div className="left-column">
          <Greeting />
          {!loading && <WeatherCard weather={weather} />}
          {!loading && <WeatherDetails weather={weather} />}
        </div>

        <div className="right-column">
          {!loading && <Forecast forecast={forecast} />}
          {!loading && <SunInfo weather={weather} />}
      
          {weather && !loading && (
            <WeatherMap
              lat={weather.coord.lat}
              lon={weather.coord.lon}
              city={weather.name}
              country={weather.sys.country}
            />
          )}
            
          {!loading && <TipsOfDay weather={weather} />}

           {loading && (
        <div className="loading-container">
          <LineSpinner size="40" stroke="3" speed="1" color="white" />
        </div>
      )}
        </div>
      </div>
       )}
    </div>
  )
}

export default App
