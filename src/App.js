import "./App.css";
import "./index.css";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home"; 
import React from "react";
import About from "./pages/about";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      < Footer />
</Router>
  )  
;
};


export default App;
