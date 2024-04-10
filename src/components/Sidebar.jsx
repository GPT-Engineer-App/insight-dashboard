import React from "react";
import { Box, VStack, Avatar, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.100" w="250px" p={4}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Avatar size="lg" name="John Doe" src="https://bit.ly/dan-abramov" />
          <Text mt={2} fontWeight="bold">
            John Doe
          </Text>
        </Box>
        <Button as={Link} to="/profile" variant="ghost" justifyContent="flex-start">
          Profile
        </Button>
        {}
      </VStack>
    </Box>
  );
};

export default Sidebar;
