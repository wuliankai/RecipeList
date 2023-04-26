import React, { useState, useEffect } from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import TopNavBar from "./Components/TopNavBar";
import SideNavBar from "./Components/SideNavBar";
import Greeting from "./Components/Greeting";

function App() {
  const apiKey = "343eece744cd4f2fba94856a0978f787";
  const [testRecipe, setTestRecipe] = useState([]);

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
    );
    const data = await res.json();
    setTestRecipe(data);
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
      <Flex>
        <Box bg="lightblue" w="7vw" h="100vh" justify="center" align="center">
          <SideNavBar />
        </Box>
        <SimpleGrid flex="1" columns={5} spacingX={1} spacingY={2}>
          <Box bg="tomato" mt={1}>
            Element 1
          </Box>
          <Box bg="tomato" mt={1}>
            Element 2
          </Box>
          <Box bg="tomato" mt={1}>
            Element 3
          </Box>
          <Box bg="tomato" mt={1}>
            Element 4
          </Box>
          <Box bg="tomato" mt={1}>
            Element 5
          </Box>
          <Box bg="tomato" mt={1}>
            Element 6
          </Box>
          <Box bg="tomato" mt={1}>
            Element 7
          </Box>
          <Box bg="tomato" mt={1}>
            Element 8
          </Box>
          <Box bg="tomato" mt={1}>
            Element 9
          </Box>
          <Box bg="tomato" mt={1}>
            Element 10
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default App;
