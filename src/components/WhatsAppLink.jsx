import React from 'react';

const WhatsAppLink = ({ phoneNumber, message }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      Open WhatsApp
    </a>
  );
};

export default WhatsAppLink;
