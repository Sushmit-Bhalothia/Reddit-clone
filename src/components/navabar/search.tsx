import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import Right from "./right";

type searchProps = {
  // user:
};

const search: React.FC<searchProps> = () => {
  return (
    <Flex flexGrow={1} mx={2} align="Center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          type="tel"
          placeholder="Search reddit "
          fontSize="10pt"
          mb={1}
          _placeholder={{
            color: "gray.500",
          }}
          _hover={{
            bg: "white ",
            border: "1px solid ",
            bordercolor: "blue",
          }}
          _focus={{
            outline: "none",
            border: " 1px solid ",
            bordercolor: "blue",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
      <Right />
    </Flex>
  );
};
export default search;
