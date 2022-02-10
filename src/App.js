import { Box } from "@mui/material";
import Header from "./components/Header";
import MainForm from "./components/MainForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Header />
      <MainForm />
    </Box>
  );
}

export default App;
