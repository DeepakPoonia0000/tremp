import AllProducts from './components/AllProducts';
import Announcements from './components/Announcements';
import Fotter from './components/Fotter';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import './app.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import WhatsAppLink from './components/WhatsAppLink';
import TermsAndServices from './components/Footer/TermsAndServices';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';

function App() {

  
  
  
  return (
    <div className="App" style={{textAlign:"center"}}>
   
        <Announcements />
        <NavBar />
        <Routes>
        <Route path="/allProducts" element={<AllProducts/>} />
        <Route path="/" element={<Hero />} />
        <Route path="/privacyolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndServices />} />
        </Routes>

    </div>
  );
}

export default App;
