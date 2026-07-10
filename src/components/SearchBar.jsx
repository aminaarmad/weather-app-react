import { useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"

function SearchBar({ setWeather, setLoading, loading, setForecast ,recentSearches,setRecentSearches}) {

  const [city, setCity] = useState("")
  const [showRecent, setShowRecent] = useState(false)

const getWeather = async () => {

  if(city === ""){
    alert("Please enter a city")
    return
  }
    setLoading(true)
    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37bad001a49d0dc47c4560ed6e133171&units=metric`
  )

const forecastResponse = await fetch(
 `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=37bad001a49d0dc47c4560ed6e133171&units=metric`
)

const forecastData = await forecastResponse.json()

  const data = await response.json()

  if(data.cod === "404"){
    alert("City not found")
    return
  }

  setWeather(data)
  setForecast(forecastData.list)
  setLoading(false)
  setRecentSearches((prev) =>
  [data.name, ...prev.filter(city => city !== data.name)]
    .slice(0, 3)
)

setShowRecent(false)
setLoading(false)
}


  return (
   <div className="search">
     <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
          onFocus={() => setShowRecent(true)}
      />
    <button className="search-icon-btn" onClick={getWeather} disabled={loading}>
  <FaMagnifyingGlass />
</button>
</div>
  

      {showRecent && recentSearches.length > 0 && (
  <div className="recent-dropdown">
    {recentSearches.map((item) => (
     <p
  key={item}
  onClick={() => {
    setCity(item)
    setShowRecent(false)
  }}
>
  {item}
</p>
    ))}
  </div>
)}

    </div>
    

  )
}

export default SearchBar