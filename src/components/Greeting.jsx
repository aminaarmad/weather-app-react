import { TypeAnimation } from "react-type-animation";

function GoodMorningCard() {
  const hour = new Date().getHours();

  let title = "";
  let message = "";
  let icon = null;

  if (hour >= 0 && hour < 5) {
    title = "Good Night! 🌙 💤";
    message = "It's late! Time to rest, look after yourself, and recharge your energy for tomorrow.";
  } 

  else if (hour >= 5 && hour < 12) {
    title = "Good Morning! 🌈 🌸";
    message = "Start your day with energy and positivity. Enjoy the fresh air and make today a productive day.";
  } 
 
  else if (hour >= 12 && hour < 18) {
    title = "Good Afternoon! 🌤️";
    message = "Hope your day is going well. Take a short break, stay focused and keep moving toward your goals.";
  } 
 
  else {
    title = "Good Evening! 🌙";
    message = "Time to relax and enjoy a peaceful evening. Take a moment to recharge and prepare for tomorrow.";
  }

  return (
    <div className="greeting-card">
      <div className="greeting-header">
        {icon}

        <h2>{title}</h2>
      </div>

      <TypeAnimation
        sequence={[message]}
        wrapper="p"
        speed={60}
        repeat={0}
      />
    </div>
  );
}

export default GoodMorningCard;