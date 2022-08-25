import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import "./style.css";
const Login: React.FC = () => {
  return (
    <div className="form__signup">
      <FormControl isRequired width={"50%"}>
        <Heading>Form Login</Heading>
        <Box>
          <FormLabel className="form__label">User name</FormLabel>
          <Input placeholder="Username" />
        </Box>
        <Box>
          <FormLabel className="form__label">Password</FormLabel>
          <Input placeholder="Password" />
        </Box>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
export default Login;
