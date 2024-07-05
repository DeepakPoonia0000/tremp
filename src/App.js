import AllProducts from "./components/AllProducts";
import Announcements from "./components/nav-ann-fotr/Announcements";
import NavBar from "./components/nav-ann-fotr/NavBar";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Men from "./components/men-wom-chil/Men";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import TermsAndServices from "./components/Footer/TermsAndServices";
import Women from "./components/men-wom-chil/Women";
import Hero from "./components/Hero";
import Fotter from "./components/nav-ann-fotr/Fotter";
import Children from "./components/men-wom-chil/Children";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [selectedDivision, setSelectedDivision] = useState("");

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className="z-3">
        <Announcements />
        <NavBar setSelectedDivision={setSelectedDivision} />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/men" element={<Men selectedDivision={selectedDivision} />} />
        <Route path="/women" element={<Women selectedDivision={selectedDivision} />} />
        <Route path="/children" element={<Children selectedDivision={selectedDivision} />} />
        <Route path="/privacyolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndServices />} />
      </Routes>
      
      <Fotter />
    </div>
  );
}

export default App;
