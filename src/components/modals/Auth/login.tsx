import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

type loginProps = {};

const login: React.FC<loginProps> = () => {
  const [loginform, selloginform] = useState({
    email: "",
    password: "",
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    selloginform((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        mb={2}
        type="email"
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="password"
        mb={2}
        type="password"
        onChange={onChange}
      />
      <Button type="submit" width="100%" height="36px" my={2}>
        Submit
      </Button>
    </form>
  );
};
export default login;
