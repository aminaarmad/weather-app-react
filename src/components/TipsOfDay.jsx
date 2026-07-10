import {
  Shirt,
  Sun,
  Droplets,
  Umbrella,
  Footprints,
  Car,
  Trees,
  Cloud,
  Wind,
  Snowflake,
  Hand,
} from "lucide-react"

function TipsOfDay({ weather }) {
  if (!weather) return null

  const condition = weather.weather[0].main

  let tips = []

  if (condition === "Clear") {
    tips = [
      {
        text: "Wear light clothes",
        icon: <Shirt size={22} />,
      },
      {
        text: "Don't forget sunscreen",
        icon: <Sun size={22} />,
      },
      {
        text: "Stay hydrated",
        icon: <Droplets size={22} />,
      },
    ]
  } else if (condition === "Rain") {
    tips = [
      {
        text: "Take an umbrella",
        icon: <Umbrella size={22} />,
      },
      {
        text: "Wear waterproof shoes",
        icon: <Footprints size={22} />,
      },
      {
        text: "Drive carefully",
        icon: <Car size={22} />,
      },
    ]
  } else if (condition === "Clouds") {
    tips = [
      {
        text: "Perfect for a walk",
        icon: <Trees size={22} />,
      },
      {
        text: "Enjoy fresh air",
        icon: <Wind size={22} />,
      },
      {
        text: "Comfortable weather",
        icon: <Cloud size={22} />,
      },
    ]
  } else if (condition === "Snow") {
    tips = [
      {
        text: "Wear warm clothes",
        icon: <Shirt size={22} />,
      },
      {
        text: "Use gloves",
        icon: <Hand size={22} />,
      },
      {
        text: "Be careful outside",
        icon: <Snowflake size={22} />,
      },
    ]
  } else {
    tips = [
      {
        text: "Enjoy your day",
        icon: <Sun size={22} />,
      },
    ]
  }

  return (
   <div className={`tips-card ${condition.toLowerCase()}`}>
      <h3>Tips for the Day</h3>

      {tips.map((tip, index) => (
        <div key={index} className="tip-item">
          <span className="tip-icon">
            {tip.icon}
          </span>

          <p>{tip.text}</p>
        </div>
      ))}
    </div>
  )
}

export default TipsOfDay