import AllProducts from "./components/AllProducts";
import Announcements from "./components/Announcements";
import NavBar from "./components/NavBar";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Men from "./components/Men";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import TermsAndServices from "./components/Footer/TermsAndServices";

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
        <Route path="/privacyolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndServices />} />
      </Routes>
    </div>
  );
}

export default App;
