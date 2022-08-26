import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAccount = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (isAccount) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };
  useEffect(() => {
    if (isAccount) {
      return navigate("/");
    }
    // eslint-disable-next-line
  }, [isAccount]);
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
        {/* <Link to="/">
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
        </Link> */}
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
        {isAccount ? (
          <Menu>
            <MenuButton>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </MenuButton>
            <MenuList bg={"rgb(26,32,44)"}>
              <Link to={"/profile"}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Box>
            <Link to={"/login"}>
              <Button
                fontWeight={["medium", "medium", "medium"]}
                fontSize={["xs", "sm", "lg", "xl"]}
                variant="ghost"
                _hover={{ bg: "rgba(0,0,0,.2)" }}
                p={[1, 4]}
                color="white"
              >
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button
                fontWeight={["medium", "medium", "medium"]}
                fontSize={["xs", "sm", "lg", "xl"]}
                variant="ghost"
                _hover={{ bg: "rgba(0,0,0,.2)" }}
                p={[1, 4]}
                color="white"
              >
                SignUp
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
