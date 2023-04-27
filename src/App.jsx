import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";

import TopNavBar from "./Components/TopNavBar";
import SideNavBar from "./Components/SideNavBar";
import Greeting from "./Components/Greeting";
import MainDisplayGrid from "./Components/MainDisplayGrid";

function App() {
  const apiKey = "343eece744cd4f2fba94856a0978f787";
  const [mealOfTime, setMealOfTime] = useState("");

  //===========================================================================
  //Below is to set the initial population string to breakfast, lunch or dinner
  //===========================================================================
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setMealOfTime("breakfast");
    } else if (currentHour >= 13 && currentHour <= 16) {
      setMealOfTime("lunch");
    } else {
      setMealOfTime("dinner");
    }
  }, []);
  //==========================
  //initial fetch of reciepes
  //==========================
  const [testRecipe, setTestRecipe] = useState([]);

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${mealOfTime}&number=20`
    );
    if (res.status === 200) {
      const data = await res.json();
      setTestRecipe(data);
    } else {
      alert("recipe wasn't fetched");
    }
  };

  //=======================
  //user search of recipes
  //=======================

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${searchTerm}&number=20`
    );
    if (res.status === 200) {
      const data = await res.json();
      setTestRecipe(data);
      setSearchTerm("");
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
        <TopNavBar
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleInputChange={handleInputChange}
        />
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
