import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;