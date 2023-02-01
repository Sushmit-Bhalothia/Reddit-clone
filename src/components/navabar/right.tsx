import { Flex } from "@chakra-ui/react";
import React from "react";
import Authbuttons from "./authbuttons";

import Authmodal from "../modals/Auth/Authmodal";

type rightProps = {
  // user
};

const right: React.FC<rightProps> = () => {
  return (
    <>
      <Authmodal />
      <Flex justify="centre " align=" center ">
        <Authbuttons />
      </Flex>
    </>
  );
};
export default right;
