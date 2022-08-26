import React, { useState } from "react";
import {
  // Box,
  Button,
  FormControl,
  // FormLabel,
  Heading,
  // Input,
  useToast,
} from "@chakra-ui/react";
import "./style.css";
import { useAppDispatch } from "../../hooks";
import { fetchSignUp } from "../../redux/reducer/accountSlice";
import { useNavigate, useParams } from "react-router-dom";
import DATA from "../../common/const/PAGE.json";
import Widget from "../../widgets";
// import { LoginState, SignUpState } from "../../model/type";
//type sign up
// type signupType = LoginState & SignUpState;

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
  const { signup } = useParams<{ signup: string }>();
  const PAGE = DATA.find((fd) => fd.sid === signup);
  
  const [info, setInfo] = useState<Partial<any>>({});
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
        {PAGE?.schema?.map((sch: Partial<any>, key) => {
          const Item = Widget[sch.widget];
          return (
            <Item
              schema={sch}
              key={key}
              value={info[sch?.field]}
              onChange={handleChange}
            />
          );
        })}
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
export default SignUp;
