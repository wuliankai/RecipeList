import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

function Greeting() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [mealOfTime, setMealOfTime] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour <= 12) {
      setTimeOfDay("morning");
      setMealOfTime("breakfast");
    } else if (currentHour >= 13 && currentHour <= 16) {
      setTimeOfDay("afternoon");
      setMealOfTime("lunch");
    } else {
      setTimeOfDay("evening");
      setMealOfTime("dinner");
    }
  }, []);

  return (
    <Text
      fontFamily="Cabin Sketch"
      fontSize="3.5rem"
      color="white"
      justify="center"
    >
      Good {timeOfDay}, here are some {mealOfTime} recommendations:
    </Text>
  );
}

export default Greeting;
