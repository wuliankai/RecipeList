import React, { useState, useEffect } from "react";

function Greeting() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [mealOfTime, setMealOfTime] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour <= 12) {
      setTimeOfDay("morning");
      setMealOfTime("breakfast");
    } else if (currentHour >= 13 && currentHour <= 17) {
      setTimeOfDay("afternoon");
      setMealOfTime("lunch");
    } else {
      setTimeOfDay("evening");
      setMealOfTime("dinner");
    }
  }, []);

  return (
    <div>
      Good {timeOfDay}, here are some {mealOfTime} recommendations:
    </div>
  );
}

export default Greeting;
