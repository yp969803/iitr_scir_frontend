import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Download from "./components/pages/Download";
import Faq from "./components/pages/Faq";
import Home from "./components/pages/Home";
import Ipr from "./components/pages/Ipr";
import People from "./components/pages/People";
import ResearchFacility from "./components/pages/ResearchFacility";
import ResearchSupport from "./components/pages/Research";
import StudentCorner from "./components/pages/StudentCorner";
import Footer from "./components/utils/Footer";
import Navbar from "./components/utils/Navbar";
import { Routes, Route } from "react-router-dom";
import Research from "./components/pages/Research";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/download" element={<Download/>}></Route>
    <Route exact path="/faq" element={<Faq/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
    <Route exact path="/research" element={<Research/>}></Route>
    <Route exact path="/studentCorner" element={<StudentCorner/>}></Route>
    <Route exact path="/ipr" element={<Ipr/>}></Route>
    <Route exact path="/peoples" element={<People/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
