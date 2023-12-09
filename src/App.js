import Home from "./components/pages/Home";
import Footer from "./components/utils/Footer";
import Navbar from "./components/utils/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}></Route>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
