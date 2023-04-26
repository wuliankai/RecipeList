import React, { useState, useEffect } from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";

import TopNavBar from "./Components/TopNavBar";
import SideNavBar from "./Components/SideNavBar";
import Greeting from "./Components/Greeting";
import MainDisplayGrid from "./Components/MainDisplayGrid";

function App() {
  const apiKey = "343eece744cd4f2fba94856a0978f787";
  const [mealOfTime, setMealOfTime] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour <= 12) {
      setMealOfTime("breakfast");
    } else if (currentHour >= 13 && currentHour <= 16) {
      setMealOfTime("lunch");
    } else {
      setMealOfTime("dinner");
    }
  }, []);

  const [testRecipe, setTestRecipe] = useState([]);

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${mealOfTime}&type=main+course&number=20`
    );
    if (res.status === 200) {
      const data = await res.json();
      console.log({ data });
      setTestRecipe(data);
    } else {
      alert("recipe wasn't fetched");
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <Flex bg="lightgreen" w="100vw" h="5vh" justify="center" align="center">
        <TopNavBar />
      </Flex>
      <Flex bg="lightblue" w="100vw" h="3vh" justify="center" align="center">
        <Greeting />
      </Flex>
      <Flex bg="lightblue">
        <Box bg="lightblue" w="7vw" h="100vh" justify="center" align="center">
          <SideNavBar />
        </Box>
        <SimpleGrid flex="1" columns={5} spacingX={1} spacingY={2}>
          <MainDisplayGrid testRecipe={testRecipe} />
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default App;
