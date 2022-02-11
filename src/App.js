import { Box, createTheme } from "@mui/material";
import Header from "./components/Header";
import MainForm from "./components/MainForm";
import Navbar from "./components/Navbar";
import {pink} from '@mui/material/colors';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: pink
  }
}); 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Header />
        <MainForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
