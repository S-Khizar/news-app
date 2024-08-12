import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ filterNews }) => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src="/logo-without-bg.png" alt="logo" />
      </div>
      <ul className={show ? "show": ""}>
        <li onClick={() => filterNews("everything")}>ALL</li>
        <li onClick={() => filterNews("business")}>BUSINESS</li>
        <li onClick={() => filterNews("entertainment")}>ENTERTAINMENT</li>
        <li onClick={() => filterNews("general")}>GENERAL</li>
        <li onClick={() => filterNews("health")}>HEALTH</li>
        <li onClick={() => filterNews("science")}>SCIENCE</li>
        <li onClick={() => filterNews("sports")}>SPORTS</li>
        <li onClick={() => filterNews("technology")}>TECHNOLOGY</li>
      </ul>
      <RxHamburgerMenu onClick={() => setShow(!show)} />
    </nav>
  );
};

export default Navbar;