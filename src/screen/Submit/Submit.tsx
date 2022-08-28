import React, { useState } from "react";
import { Heading, Button, FormControl, useToast } from "@chakra-ui/react";
import { fetchSubmit } from "../../redux/reducer/accountSlice";
import { useNavigate, useParams } from "react-router-dom";
import DATA from "../../common/const/PAGE.json";
import { useAppDispatch } from "../../hooks";
import Widget from "../../widgets";
import "./style.css";

const SubmitForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { query } = useParams<{ query: string }>();
  const PAGE = DATA.find((fd) => fd.sid === query);

  const [submit, setSubmit] = useState<Partial<any>>({});
  const toast = useToast({
    position: "top",
    duration: 1000,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setSubmit((prev: any) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const api: any = PAGE?.api?.find((fd) =>
        PAGE?.button?.map((mp) => {
          return mp?.api?.name === fd.name;
        })
      );
      let rs = await dispatch(fetchSubmit({ ...api, ...submit }));
      if (rs?.payload?.email) {
        toast({ status: "success", title: "Success" });
        if (api?.navigate === "login") {
          navigate("/");
          window.location.reload();
        } else navigate("/todo/login");
      } else {
        return toast({ status: "error", title: rs?.payload });
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const renderBtn = () => {
    return (
      <>
        {PAGE?.button?.map((btn, idx) => (
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            key={idx}
            onClick={handleSubmit}
          >
            {btn?.name}
          </Button>
        ))}
      </>
    );
  };

  return (
    <form className="form__signup">
      <FormControl isRequired width={"60%"}>
        <Heading>{PAGE?.name}</Heading>
        {PAGE?.schema?.map((sch: Partial<any>, key: any) => {
          const Item = Widget[sch.widget];
          return (
            <Item
              schema={sch}
              key={key}
              value={submit[sch?.field]}
              onChange={handleChange}
            />
          );
        })}
        {renderBtn()}
      </FormControl>
    </form>
  );
};

export default SubmitForm;
