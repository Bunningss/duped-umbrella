import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <h1>Admin Navbar</h1>
      {children}
      <h1>Admin Footer</h1>
    </>
  );
};

export default layout;
