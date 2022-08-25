import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { TodoState } from "../../model/type";
import {
  // deleteTodoItem,
  fetchDataTodo,
  fetchDeleteItem,
} from "../../redux/reducer/todoListSlice";
const TodoInfo: React.FC<TodoState> = ({ title, author, id }) => {
  const toast_success = useToast({
    position: "top",
    title: "Successful",
    status: "success",
    duration: 1500,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const redirect = (id: string) => {
    navigate(`/update/${id}`);
  };
  const handleDelteItem = async () => {
    let rs: any = await dispatch(fetchDeleteItem({ id: id }));
    if (rs) {
      dispatch(fetchDataTodo());
      toast_success();
    }
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
