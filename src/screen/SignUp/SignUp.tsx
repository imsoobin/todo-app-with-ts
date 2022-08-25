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

const SignUp: React.FC = () => {
  return (
    <div className="form__signup">
      <FormControl isRequired width={"50%"}>
        <Heading>Form SignUp</Heading>
        <Box>
          <FormLabel className="form__label">User name</FormLabel>
          <Input placeholder="user name" />
        </Box>
        <Box>
          <FormLabel className="form__label">Phone</FormLabel>
          <Input placeholder="phone number" />
        </Box>
        <Box>
          <FormLabel className="form__label">Password</FormLabel>
          <Input placeholder="pass" />
        </Box>
        <Box>
          <FormLabel className="form__label">Confirm password</FormLabel>
          <Input placeholder="confirm pass" />
        </Box>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
export default SignUp;
