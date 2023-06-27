import React from "react";

const sellerLayout = ({ children }) => {
  return (
    <>
      <h1>Seller Navbar</h1>
      {children}
      <h1>Seller Footer</h1>
    </>
  );
};

export default sellerLayout;
