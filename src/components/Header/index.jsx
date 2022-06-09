import React from "react";
import { Box, Stack, Heading, Flex, useDisclosure, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi"

//import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear("token")
    navigate("/login")
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          RPC
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {/* <HamburgerIcon /> */}
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/clientes">
          Clientes
        </Link>
        <Link to="/pets">
          Pets
        </Link>
        <Link to="/consultas">
          Consultas
        </Link>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button 
        rightIcon={<FiLogOut />} 
        color='teal.600' 
        bg='gray.50'
        _hover={{ bg: "gray.400", color: "gray.50"}}
        onClick={logout}>
          Sair
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;