import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import News from "./Components/News/News";
import FloatingButtons from "./Components/FloatingButtons/FloatingButtons";
import Floatingform from "./Components/FloatingForm/FloatingForm";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <News />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/details" element={<BlogDetails/>}/>
      </Routes>

      <Footer />
      <Floatingform />
      <FloatingButtons />
    </Router>
  );
}

export default App;