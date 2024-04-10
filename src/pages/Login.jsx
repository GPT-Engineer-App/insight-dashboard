import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Login
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={8}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue" size="lg" width="full">
        Login
      </Button>
    </Box>
  );
};

export default Login;
