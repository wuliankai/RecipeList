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
} from "@chakra-ui/react";

function MainDisplayGrid(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleImageClick = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
    onOpen();
  };

  return (
    <>
      {props.testRecipe.results?.map((eachEle) => (
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src={selectedRecipe?.image} />
            {selectedRecipe?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {selectedRecipe?.analyzedInstructions?.steps.map((eachStep) => (
                <li>{JSON.stringify(eachStep)}</li>
              ))}
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MainDisplayGrid;
