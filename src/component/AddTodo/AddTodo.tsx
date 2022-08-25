import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  // addTodoItem,
  // updateTodoItem,
  fetchAddItem,
  fetchDataTodo,
  fetchUpdateItem,
} from "../../redux/reducer/todoListSlice";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const AddTodo: React.FC = () => {
  const toast_success = useToast({
    position: "top",
    title: "Successful",
    status: "success",
    duration: 1000,
  });
  const toast_error = useToast({
    position: "top",
    title: "Error",
    status: "error",
    duration: 1000,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const listFindId = useAppSelector((state) =>
    state.appTodo.todoList.find((fd) => fd.id === id)
  );
  const [title, setTitle] = useState<string | undefined>(
    listFindId?.title || ""
  );
  const [author, setAuthor] = useState<string | undefined>(
    listFindId?.author || ""
  );

  const handleUpdateTodoItem = async () => {
    // dispatch(updateTodoItem({ id: id!, title, author }));
    let rs: any = await dispatch(fetchUpdateItem({ id: id!, title, author }));
    if (rs) {
      dispatch(fetchDataTodo());
      toast_success();
    } else toast_error();

    setTitle("");
    setAuthor("");
    navigate("/");
  };
  const handleOnSubmitAddTodo = async () => {
    if (id) {
      handleUpdateTodoItem();
      return;
    }
    // dispatch(addTodoItem({ title, author, id: uuidv4() }));
    let rs: any = await dispatch(fetchAddItem({ title, author }));
    if (rs) {
      dispatch(fetchDataTodo());
      toast_success();
    } else toast_error();

    setTitle("");
    setAuthor("");
    navigate("/");
  };

  return (
    <>
      <Flex
        height="80vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box width="50%">
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <Heading color="white">
              {id ? "Update todo item" : "Add todo item"}
            </Heading>
          </Flex>
          <FormControl isRequired>
            <FormLabel color="white">Title</FormLabel>
            <Input
              autoComplete="off"
              value={title}
              color="white"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <FormLabel color="white" marginTop={4}>
              Author
            </FormLabel>
            <Input
              autoComplete="off"
              value={author}
              color="white"
              placeholder="Me :)"
              onChange={(e) => setAuthor(e.currentTarget.value)}
            />
          </FormControl>
          <Button
            marginTop={4}
            colorScheme="green"
            type="submit"
            onClick={handleOnSubmitAddTodo}
          >
            Submit
          </Button>
          <Link to={"/"}>
            <Button marginTop={4} marginLeft={2} colorScheme="teal">
              Cancel
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
};
export default AddTodo;
