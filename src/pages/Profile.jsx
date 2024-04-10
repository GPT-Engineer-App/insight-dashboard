import React from "react";
import { Box, Heading, Text, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box maxWidth="600px" mx="auto" mt={8}>
      <Avatar size="2xl" name="John Doe" src="https://bit.ly/dan-abramov" mx="auto" />
      <Heading as="h1" size="xl" textAlign="center" mt={4} mb={8}>
        John Doe
      </Heading>
      <Text fontSize="xl">Email: john.doe@example.com</Text>
      <Text fontSize="xl">Role: Admin</Text>
    </Box>
  );
};

export default Profile;
