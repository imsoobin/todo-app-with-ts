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
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import {
  fetchAddItem,
  fetchDataTodo,
  fetchUpdateItem,
} from "../../redux/reducer";
import { Link } from "react-router-dom";

const AddTodo: React.FC = () => {
  const toast = useToast({
    position: "top",
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
    let rs: any = await dispatch(fetchUpdateItem({ id: id!, title, author }));
    if (rs?.payload === "Success") {
      dispatch(fetchDataTodo());
      toast({ status: "success", title: "Sccuess" });
    } else toast({ status: "error", title: rs?.payload });

    setTitle("");
    setAuthor("");
    navigate("/");
  };
  const handleOnSubmitAddTodo = async () => {
    if (id) {
      handleUpdateTodoItem();
      return;
    }
    let rs: any = await dispatch(fetchAddItem({ title, author }));
    if (rs?.payload === "Success") {
      dispatch(fetchDataTodo());
      toast({ status: "success", title: "Sccuess" });
    } else toast({ status: "error", title: rs?.payload });

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
