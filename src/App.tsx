import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStyles, makeStyles, Theme} from "@mui/material/styles"
import './App.css';
import { Title } from './title/components/title';
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
      </Routes>
    </BrowserRouter> 
  </ThemeProvider>

  );
}

export default App;
