import React, { useState } from "react";
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
} from "@chakra-ui/react";

function MainDisplayGrid(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
    onOpen();
  };

  return (
    <>
      {props.testRecipe.recipes?.map((eachEle) => (
        <Card key={eachEle.id}>
          <CardHeader>
            <Image
              src={eachEle.image}
              onClick={() => handleImageClick(eachEle)}
            />
          </CardHeader>
          <CardBody>{eachEle.title}</CardBody>
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
            <Button bg="lightblue" selectedrecipe={selectedRecipe}>
              Get Ingredients List
            </Button>
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
