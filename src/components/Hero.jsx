import React from 'react';
import firstImage from '../assets/Background/firstImage.webp'
import firstImage1 from '../assets/Background/firstImage1.webp'
import secondImage from '../assets/Background/secondImage.webp'

import joggers from '../assets/joggers.webp'
import jeans from '../assets/men_jeans.webp'

// import '../Styles/hero.css'

const Hero = () => {
  return (
   <>
   <div style={{overflow:"hidden" , background:"white"}}>
   <div className="img-div">
   <img src={firstImage1} alt="" srcset="" className='displ-none' />
   <img src={firstImage} alt="" srcset=""   className='displ-vis' />
   <div className="centering " style={{width:"100%"}}>
   <button className='shop-btn displ-vis'>Shop Now</button>
   </div>
   <img src={secondImage} alt="" className='displ-vis'/>
   <div className="centering" style={{width:"100%"}}>
   <button className='shop-btn'>Shop Now</button>
   </div>
   </div>
   <div className='centering' style={{ width:"100%"}}>
    <div>
        <img src={joggers} alt="" style={{width:"100px"}} />
        <h3 style={{marginLeft:"15px"}}>Joggers</h3>
        </div>
        <div>
        <img src={jeans} alt="" style={{width:"100px"}} />
        <h3 style={{marginLeft:"15px"}}>Jeans</h3>
        </div>
   </div>
   </div>
   </>
  )
}

export default Hero