import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingList from "./ShoppingList";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Checkbox,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";

function MainDisplayGrid(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
    onOpen();
  };

  localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));

  return (
    <>
      {props.testRecipe.recipes?.map((eachEle) => (
        <Card key={eachEle.id} bg="#A1A09C">
          <CardHeader>
            <Image
              src={eachEle.image}
              onClick={() => handleImageClick(eachEle)}
            />
          </CardHeader>
          <CardBody>
            <Text fontFamily="Walter Turncoat" color="white" fontSize="2rem">
              {eachEle.title}
            </Text>
          </CardBody>
        </Card>
      ))}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src={selectedRecipe?.image} />
            {selectedRecipe?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {selectedRecipe?.analyzedInstructions?.["0"].steps?.map(
                (eachStep) => (
                  <Checkbox size="lg" key={eachStep.number}>
                    {eachStep.step}
                    <hr />
                    <br />
                  </Checkbox>
                )
              )}
            </ul>
          </ModalBody>

          <ModalFooter>
            <Link to="/shoppinglist" target="_blank">
              <Button>
                Ingredient List
                <VisuallyHidden>
                  <ShoppingList selectedRecipe={selectedRecipe} />
                </VisuallyHidden>
              </Button>
            </Link>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MainDisplayGrid;
