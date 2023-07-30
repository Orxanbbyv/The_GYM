import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import ExerciseDetail from "../src/pages/ExerciseDetail";
import Footer from "./components/Footer";

import "../src/App.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
