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
import { LoginState } from "../../model/type";
import { useAppDispatch } from "../../hooks";
import { fetchLogin } from "../../redux/reducer/accountSlice";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const toast_success = useToast({
    position: "top",
    title: "Successful",
    status: "success",
    duration: 1000,
  });
  const toast_error = useToast({
    position: "top",
    status: "error",
    duration: 1000,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [account, setAccount] = useState<LoginState>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitLogin = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      let rs = await dispatch(
        fetchLogin({ email: account?.email, password: account?.password })
      );
      if (rs?.payload?.email) {
        toast_success();
        navigate("/");
        window.location.reload()
      } else {
        return toast_error({ title: rs?.payload });
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <form className="form__signup" onSubmit={handleSubmitLogin}>
      <FormControl isRequired width={"60%"}>
        <Heading>Form Login</Heading>
        <Box>
          <FormLabel className="form__label">Email</FormLabel>
          <Input
            autoComplete="off"
            placeholder="Email"
            value={account?.email}
            name="email"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel className="form__label">Password</FormLabel>
          <Input
            autoComplete="off"
            placeholder="Password"
            value={account?.password}
            name="password"
            onChange={handleChange}
            type="password"
          />
        </Box>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
export default Login;
