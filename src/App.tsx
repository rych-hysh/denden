import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Title from "./title/Title";
import Lobby from "./lobby/lobby";
import { ThemeProvider, createTheme } from "@mui/material";
function App() {
  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#8bcff1"
      },
      secondary: {
        main: "#b1dfe6"
      },
      success: {
        main: "#5087f7"
      },
      error: {
        main: "#ee6d4a"
      }
    }
  })
  return (
  <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />}/>
        <Route path="/lobby" element={<Lobby />}/>
      </Routes>
    </BrowserRouter> 
  </ThemeProvider>

  );
}

export default App;
