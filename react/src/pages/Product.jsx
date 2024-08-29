import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1 className="Product">Product</h1>
      <button className="black">
        <Link to="/about">Go to About Page</Link>
      </button>
      <button className="yellow">
        <Link to="/home">Go to Home Page</Link>
      </button>
    </div>
  );
}
export default Navbar;
