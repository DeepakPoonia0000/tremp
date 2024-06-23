import AllProducts from './components/AllProducts';
import Announcements from './components/Announcements';
import Fotter from './components/Fotter';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

import image1 from './assets/trempone.jpg'
import image2 from './assets/tremptwo.jpg'
import image3 from './assets/trempthree.jpg'
import WhatsApp from './assets/icons8-whatsapp-50.png'

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import WhatsAppLink from './components/WhatsAppLink';

function App() {
  const productList = [
    {
      name: 'jeans',
      items: [
        {
          name: 'Casual jeans',
          description: 'Comfortable and stylish jeans for everyday wear.',
          image: image1,
          price: 380.80
        },
        {
          name: 'Sport jeans',
          description: 'Perfect jeans for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Sport jeans',
          description: 'Perfect jeans for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Casual jeans',
          description: 'Comfortable and stylish jeans for everyday wear.',
          image: image1,
          price: 380.80
        },
        {
          name: 'Sport jeans',
          description: 'Perfect jeans for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Sport jeans',
          description: 'Perfect jeans for sports and fitness activities.',
          image: image2,
          price: 480.80
        }
      ]
    },
    {
      name: 'Everyday Jeans',
      items: [
        {
          name: 'Skinny Fit Jeans',
          description: 'Trendy skinny fit jeans with a snug fit.',
          image: image1,
          price: 580.80
        },
        {
          name: 'High Waist Jeans',
          description: 'High waist jeans with a flattering fit.',
          image: image2,
          price: 680.80
        },
        {
          name: 'Sport jeans',
          description: 'Perfect jeans for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Skinny Fit Jeans',
          description: 'Trendy skinny fit jeans with a snug fit.',
          image: image1,
          price: 580.80
        },
        {
          name: 'High Waist Jeans',
          description: 'High waist jeans with a flattering fit.',
          image: image2,
          price: 680.80
        },
        {
          name: 'Sport jeans',
          description: 'Perfect jeans for sports and fitness activities.',
          image: image2,
          price: 480.80
        }
      ]
    }
  ];

  const phoneNumber = '7357177777'; 
  const message = 'Hello!';
  
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Router>
        <Announcements />
        <NavBar />
        <Hero />
        <Link to="/allProducts"><button className='shop-btn'>Shop Now</button></Link>
        <WhatsAppLink phoneNumber={phoneNumber} message={message} />
        <Routes>
          <Route path="/allProducts" element={<AllProducts productList={productList} />} />
          {/* Define other routes here if needed */}
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;