import AllProducts from "./components/AllProducts";
import Announcements from "./components/Announcements";
import Fotter from "./components/Fotter";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhatsApp from "./assets/images/png/icons8-whatsapp-50.png";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhatsAppLink from "./components/WhatsAppLink";

function App() {
  const phoneNumber = "7357177777";
  const message = "Hello!";
  const amount = 500;
  const upiId = "9466441441@axl";

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Announcements />
      <NavBar />
      <Hero />
      <Link to="/allProducts">
        <button className="shop-btn">Shop Now</button>
      </Link>
      <WhatsAppLink
        phoneNumber={phoneNumber}
        message={message}
        amount={amount}
        upiId={upiId}
      />
      <Routes>
        <Route path="/allProducts" element={<AllProducts />} />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
