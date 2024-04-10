import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Sidebar from "./components/Sidebar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex={1}>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" position="absolute" top={4} right={4} />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
