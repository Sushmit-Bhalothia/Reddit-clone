import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex>
      <Button variant="oauth" mb={2} width="100%">
        <Image src="/images/googlelogo.png" height="20px" mr={2}></Image>
        Continue With Google
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
