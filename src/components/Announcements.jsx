import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Announcements = () => {
  const announcements = [
    "Shop Denim Essentials Now",
    "Free Delivery On Prepaid Orders",
    "Buy High Quality Products"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="slider" 
    style={{
      width:"100%",
      display:"flex",
      justifyContent:"space-between",
      height:"40px",
      textAlign:"center",
      color:"white",
      background:"black",
      verticalAlign:"center",
      margin:"0px",
      // position:"absolute",
      // top:"0",
      // left:"0"
    }}>
      <button onClick={handlePrev} className="slider-button" style={{
        background:"transparent",
        color:"white",
        border:"0px"
      }}><FontAwesomeIcon icon={faChevronLeft} /></button>
      <div className="slide">
        <div style={{
          marginTop:"10px"
        }}>{announcements[currentIndex]}</div>
      </div>
      <button onClick={handleNext} className="slider-button" style={{
        background:"transparent",
        color:"white",
        border:"0px"
      }}><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  );
};

export default Announcements;
