import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import "./style.css";
import { LoginState, SignUpState } from "../../model/type";
import { useAppDispatch } from "../../hooks";
import { fetchSignUp } from "../../redux/reducer/accountSlice";
import { useNavigate } from "react-router-dom";
//type sign up
type signupType = LoginState & SignUpState;

const SignUp: React.FC = () => {
  const toast_success = useToast({
    position: "top",
    status: "success",
    duration: 3000,
  });
  const toast_error = useToast({
    position: "top",
    status: "error",
    duration: 2000,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [info, setInfo] = useState<signupType>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      let rs = await dispatch(
        fetchSignUp({
          username: info?.username,
          email: info?.email,
          phone: info?.phone,
          password: info?.password,
          // confirmPassword: info?.password
        })
      );
      if (rs.payload.email) {
        toast_success({ title: "SignUp success. Please login this account!" });
        navigate("/login");
      } else toast_error({ title: rs?.payload });
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <form className="form__signup" onSubmit={handleSubmit}>
      <FormControl isRequired width={"60%"}>
        <Heading>Form SignUp</Heading>
        <Box>
          <FormLabel className="form__label">User name</FormLabel>
          <Input
            value={info?.username}
            name="username"
            onChange={handleChange}
            placeholder="user name"
            autoComplete="off"
          />
        </Box>
        <Box>
          <FormLabel className="form__label">Email</FormLabel>
          <Input
            value={info?.email}
            name="email"
            type={'email'}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="off"
          />
        </Box>
        <Box>
          <FormLabel className="form__label">Phone</FormLabel>
          <Input
            value={info?.phone}
            name="phone"
            onChange={handleChange}
            placeholder="phone number"
            autoComplete="off"
          />
        </Box>
        <Box>
          <FormLabel className="form__label">Password</FormLabel>
          <Input
            value={info?.password}
            name="password"
            onChange={handleChange}
            placeholder="pass"
            autoComplete="off"
          />
        </Box>
        {/* <Box>
          <FormLabel className="form__label">Confirm password</FormLabel>
          <Input
            value={info?.confirmPassword}
            name="confirm_password"
            onChange={handleChange}
            placeholder="confirm pass"
            autoComplete="off"
          />
        </Box> */}
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
export default SignUp;
