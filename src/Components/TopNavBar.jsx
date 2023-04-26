import React from "react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function TopNavBar() {
  return (
    <>
      <Search2Icon />
      <Input bg="lightgray" size="md" w="50%" placeholder="Search" />
    </>
  );
}

export default TopNavBar;
