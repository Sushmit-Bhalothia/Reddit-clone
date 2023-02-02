import { authModalState } from "@/Atoms/authmodal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Login from "./login";

const Authinputs: React.FC<AuthinputsProps> = () => {
  type AuthinputsProps = {};
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      width="100%"
    >
      {modalState.view === "login" && <Login />}
      {/* {modalState.view === "signup" && <Signup />} */}
    </Flex>
  );
};
export default Authinputs;
