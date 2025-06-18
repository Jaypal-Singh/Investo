import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './NavBr.module.css';
function Navbar() {
  const [selected, setSelect] = useState("-1");
  const handleSelect=(idx)=>{
    setSelect(idx);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav gap-2 text-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup" onClick={()=>handleSelect(0)}><p className={selected === 0 ? styles.selectNav : styles.link}>Signup</p></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={()=>handleSelect(1)}><p className={selected === 1 ? styles.selectNav : styles.link}>About</p></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={()=>handleSelect(2)}><p className={selected === 2 ? styles.selectNav : styles.link}>Products</p></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={()=>handleSelect(3)}><p className={selected === 3 ? styles.selectNav : styles.link}>Pricing</p></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={()=>handleSelect(4)}><p className={selected === 4 ? styles.selectNav : styles.link}>Support</p></Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
