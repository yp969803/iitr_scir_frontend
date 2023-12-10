import Contact from "./components/pages/Contact";
import Download from "./components/pages/Download";
import Faq from "./components/pages/Faq";
import Home from "./components/pages/Home";
import ResearchFacility from "./components/pages/ResearchFacility";
import ResearchSupport from "./components/pages/ResearchSupport";
import Footer from "./components/utils/Footer";
import Navbar from "./components/utils/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/download" element={<Download/>}></Route>
    <Route exact path="/faq" element={<Faq/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
    <Route exact path="/researchSupport" element={<ResearchSupport/>}></Route>
    <Route exact path="/researchFacility" element={<ResearchFacility/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
