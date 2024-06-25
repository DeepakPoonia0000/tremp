import AllProducts from "./components/AllProducts";
import Announcements from "./components/Announcements";
import Fotter from "./components/Fotter";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./app.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhatsAppLink from "./components/WhatsAppLink";
import HomePage from "./components/HomePage";
import Men from "./components/Men";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Announcements />
      <NavBar />
      <div></div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/men" element={<Men />} />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
