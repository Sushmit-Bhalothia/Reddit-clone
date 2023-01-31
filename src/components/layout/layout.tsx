import React from "react";
import Navabar from "../navabar/navbar";
const layout: React.FC = ({ children }) => {
  return (
    <>
      <Navabar />
      <main>{children}</main>
    </>
  );
};
export default layout;
