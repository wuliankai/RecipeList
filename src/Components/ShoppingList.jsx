import { Checkbox, Flex, Image } from "@chakra-ui/react";
import React from "react";

function ShoppingList(props) {
  const storedRecipe = JSON.parse(localStorage.getItem("selectedRecipe"));

  return (
    <ul>
      {storedRecipe?.extendedIngredients?.map((eachIngre) => (
        <Flex
          h="10vh"
          w="100vw"
          justify="center"
          bg="#31343a"
          key={eachIngre.id}
        >
          <Checkbox size="lg" color="white">
            {eachIngre.original}
            <hr />
          </Checkbox>
        </Flex>
      ))}
    </ul>
  );
}

export default ShoppingList;
