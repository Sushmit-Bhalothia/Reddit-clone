import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Searchh from "../navabar/search";
// import navabar from "../navbar/navabar";

const navbar: React.FC = ({ children }) => {
  return (
    <>
      <Flex bg="white" height="44px" padding="8px 10px">
        <Flex align="center">
          <Image src="/images/redditFace.svg" height="30px" />
          <Image
            src="/images/redditText.svg"
            height="40px"
            display={{ base: "none", md: "unset" }}
          />
        </Flex>
        <Searchh></Searchh>
      </Flex>
    </>
  );
};
export default navbar;
