import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function TopNavBar(props) {
  return (
    <>
      <Search2Icon />
      <Input
        bg="lightgray"
        size="md"
        w="50%"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleInputChange}
        onKeyPress={(event) => event.key === "Enter" && props.handleSearch()}
      />
    </>
  );
}

export default TopNavBar;
