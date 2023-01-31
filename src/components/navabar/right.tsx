import { Flex } from "@chakra-ui/react";
import React from "react";
import Authbuttons from "./authbuttons";

type rightProps = {
  // user
};

const right: React.FC<rightProps> = () => {
  return (
    <>
      <Flex justify="centre " align=" center ">
        <Authbuttons />
      </Flex>
    </>
  );
};
export default right;
