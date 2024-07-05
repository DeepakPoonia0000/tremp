import React from 'react';
import firstImage from '../assets/Background/firstImage.webp'
import firstImage1 from '../assets/Background/firstImage1.webp'
import secondImage from '../assets/Background/secondImage.webp'
import { Link } from 'react-router-dom';

import instaimage1 from '../assets/productImages/footer1.jpg'
import instaimage2 from '../assets/productImages/footer2.jpg'
import instaimage3 from '../assets/productImages/footer3.jpg'
import instaimage4 from '../assets/productImages/footer4.jpg'
import WhatsAppLink from './WhatsAppLink';

const instaFeed = [
  instaimage1, instaimage2, instaimage3, instaimage4, instaimage1, instaimage2, instaimage3, instaimage4
]

const message = 'Hello!';
  const amount = 500;

const Hero = () => {
  return (
    <>
      <div style={{ overflow: "hidden", background: "white" }}>
        <div className="img-div">
          <img src={firstImage1} alt="" srcset="" className='displ-none' />
          <img src={firstImage} alt="" srcset="" className='displ-vis' />
          <div className="centering " style={{ width: "100%" }}>
            <Link to="/allProducts" className='navLinks'><button className='shop-btn '>Show All Products</button></Link>
          </div>
          <img src={secondImage} alt="" className='displ-vis' />
        </div>
        <div className='mb-3' style={{ width: "100%", display: "flex", justifyContent: "center" , marginTop:"50px" }}>
          <div className="product-grid">
            {instaFeed.map((product, idx) => (
              <div key={idx} className="product-card">
                <img src={product} className="product-image1" alt='imag not available' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhatsAppLink message={message} amount={amount} />
      
    </>
  )
}

export default Hero