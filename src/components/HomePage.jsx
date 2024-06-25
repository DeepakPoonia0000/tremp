import React from "react";
import Hero from "./Hero";
import WhatsAppLink from "./WhatsAppLink";

const HomePage = () => {
  const phoneNumber = "7357177777";
  const message = "Hello!";
  const amount = 500;
  const upiId = "9466441441@axl";
  return (
    <div>
      <Hero />
      <WhatsAppLink
        phoneNumber={phoneNumber}
        message={message}
        amount={amount}
        upiId={upiId}
      />
    </div>
  );
};

export default HomePage;
