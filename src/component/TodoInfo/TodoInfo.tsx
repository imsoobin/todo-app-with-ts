import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hook";
import { TodoState } from "../../model/type";
import { fetchDataTodo, fetchDeleteItem } from "../../redux/reducer";
const TodoInfo: React.FC<TodoState> = ({ title, author, id }) => {
  const toast = useToast({
    position: "top",
    duration: 1500,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const redirect = (id: string) => {
    navigate(`/update/${id}`);
  };
  const handleDelteItem = async () => {
    let rs: any = await dispatch(fetchDeleteItem({ id: id }));
    if (rs?.payload === "Success") {
      await dispatch(fetchDataTodo());
      toast({ status: "success", title: "Success" });
    } else return toast({ status: "error", title: rs?.payload });
  };
  return (
    <Flex p={5} justifyContent="space-between" shadow="md" borderWidth="1px">
      <Flex flexDirection="column">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{`Author: ${author}`}</Text>
      </Flex>
      <Box>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          onClick={handleDelteItem}
        />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          onClick={() => redirect(id)}
        />
      </Box>
    </Flex>
  );
};
export default TodoInfo;
