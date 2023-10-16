import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span className="logo">Logo</span>
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/cart" className="navLink">
          Cart
        </Link>
        <span className="cartCount">Cart Items:{items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
