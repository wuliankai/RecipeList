import React from "react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function TopNavBar(props) {
  return (
    <>
      <Search2Icon color="white" />
      <Input
        bg="lightgray"
        size="md"
        w="50%"
        placeholder="What are you hungry for?"
        value={props.searchTerm}
        onChange={props.handleInputChange}
        onKeyPress={(event) => event.key === "Enter" && props.handleSearch()}
      />
    </>
  );
}

export default TopNavBar;
