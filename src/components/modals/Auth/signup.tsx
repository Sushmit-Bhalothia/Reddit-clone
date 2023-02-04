import { authModalState } from "@/Atoms/authmodal";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
type signupProps = {};

const signup: React.FC<signupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signupform, setsignupform] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsignupform((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        mb={2}
        type="email"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        mb={2}
        type="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Input
        required
        name="confirmPassword"
        placeholder="confirm-password"
        mb={2}
        type="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid blue.500",
          bg: "white",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Button type="submit" width="100%" height="36px" my={2}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr="1">Already a redditor ?</Text>
        <Text
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default signup;
