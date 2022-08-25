import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchDataTodo } from "../../redux/reducer/todoListSlice";
import TodoInfo from "../TodoInfo";
const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const listTodo = useAppSelector((state) => state.appTodo.todoList);
  useEffect(() => {
    dispatch(fetchDataTodo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      height="auto"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop={20}
    >
      <Box width={"60%"}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <Heading color="white">Todo list</Heading>
          <Link to="/add">
            <Button paddingX="3rem">Add</Button>
          </Link>
        </Flex>
        {listTodo.length > 0 ? (
          <Box rounded="md" bg="purple.500" color="white" px="15px" py="15px">
            <Stack spacing={8}>
              {listTodo?.map((todo) => (
                <TodoInfo
                  key={todo.id}
                  title={todo.title}
                  author={todo.author}
                  id={todo.id}
                />
              ))}
            </Stack>
          </Box>
        ) : (
          <Box>
            <Text mt={4} color={"white"}>
              No item
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
export default TodoList;
