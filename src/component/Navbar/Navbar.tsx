import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      as="nav"
      p={4}
      mx="auto"
    >
      <Box>
        <Link to="/">
          <Button
            fontWeight={["medium", "medium", "medium"]}
            fontSize={["xs", "sm", "lg", "xl"]}
            variant="ghost"
            _hover={{ bg: "rgba(0,0,0,.2)" }}
            padding="1"
            color="white"
            letterSpacing="0.65px"
          >
            <Text fontSize={["xl", "2xl", "2xl", "2xl"]} mr={2}>
              🦉
            </Text>
            Todolidt App
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <Button
            fontWeight={["medium", "medium", "medium"]}
            fontSize={["xs", "sm", "lg", "xl"]}
            variant="ghost"
            _hover={{ bg: "rgba(0,0,0,.2)" }}
            p={[1, 4]}
            color="white"
          >
            Show todo list
          </Button>
        </Link>
        {/* <Link to="/add">
          <Button
            fontWeight={["medium", "medium", "medium"]}
            fontSize={["xs", "sm", "lg", "xl"]}
            variant="ghost"
            _hover={{ bg: "rgba(0,0,0,.2)" }}
            p={[1, 4]}
            color="white"
          >
            Add todo
          </Button>
        </Link> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
