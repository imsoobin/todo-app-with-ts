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
import { fetchLogin } from "../../redux/reducer/accountSlice";
import { useNavigate, useParams } from "react-router-dom";
import DATA from "../../common/const/PAGE.json";
import Widget from "../../widgets";
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
  const { login } = useParams<{ login: string }>();
  const PAGE = DATA.find((fd) => fd.sid === login);
  const [account, setAccount] = useState<Partial<any>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccount((prev: any) => ({ ...prev, [name]: value }));
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
        window.location.reload();
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
        {PAGE?.schema?.map((sch: Partial<any>, key: any) => {
          const Item = Widget[sch.widget];
          return (
            <Item
              schema={sch}
              key={key}
              value={account[sch?.field]}
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
export default Login;
