import React from "react";

const userLayout = ({ children }) => {
  return (
    <>
      <h1>User Navbar</h1>
      {children}
      <h1>User Footer</h1>
    </>
  );
};

export default userLayout;
