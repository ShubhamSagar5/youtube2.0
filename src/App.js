import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDeatil from "./components/VideoDeatil";
import ChannelDetail from "./components/ChannelDetail";
import SeacrhFeed from "./components/SeacrhFeed";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDeatil/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searchTerm" element={<SeacrhFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
