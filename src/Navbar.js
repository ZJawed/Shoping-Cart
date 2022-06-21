import React from "react";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="main_navbar">
        <span className="shoping-header" onClick={() => setShow(true)}>
          My Shoping
        </span>

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>

    //   <header>
    //   <div className="header">
    //     <h1>Shoping Cart </h1>
    //     {/* img */}
    //   </div>

    //   <span>
    //     <i className="fa fa-cart-plus"></i>
    //   </span>
    //   <span>0</span>
    //   <hr />
    // </header>
  );
};

export default Navbar;
