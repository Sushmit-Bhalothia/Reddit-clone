import { Button } from "@chakra-ui/react";
import React from "react";

const authbuttons: React.FC = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={()=>{}}
      >
        Sign Up
      </Button>

      <Button
        height="28px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
      >
        Log In{" "}
      </Button>
    </>
  );
};
export default authbuttons;
