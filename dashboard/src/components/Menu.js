import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import  WatchList  from './WatchList.js';
import Orders from './Orders.js'
import Holdings from './Holdings.js'
import Positions from './Positions.js'
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleManuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.menuContainer}>
      <Link to={"/"} onClick={() => handleManuClick(-1)}>
        <img
          src="media/kite-logo.svg"
          className={selectedMenu === 0 ? styles.activeManu : styles.links}
        ></img>
      </Link>

      <div className={styles.menus}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleManuClick(0)}
            >
              <p
                className={
                  selectedMenu === 0 ? styles.activeManu : styles.links
                }
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li  className={styles.hideOnMobile}>
            <Link
        
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleManuClick(1)}
            >
              <p
                className={
                  selectedMenu === 1 ? styles.activeManu : styles.links 
                }
                
              >
                Orders
              </p>
            </Link>
          </li>
          <li  className={styles.hideOnMobile}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleManuClick(2)}
            >
              <p
                className={
                  selectedMenu === 2 ? styles.activeManu : styles.links
                }
              >
                Holdings
              </p>
            </Link>
          </li>
          <li className={styles.hideOnMobile}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleManuClick(3)}
            >
              <p
                className={
                  selectedMenu === 3 ? styles.activeManu : styles.links
                }
              >
                Positions
              </p>
            </Link>
          </li>
          
          
        </ul>

        <div className={styles.profileWrapper} ref={dropdownRef}>
          <button className={styles.profile} onClick={handleProfileClick}>
            <div className={styles.avatar}>ZU</div>
            <p className={styles.username}>USERID</p>
          </button>

          {isProfileDropdownOpen && (
            <div className={styles.dropdown}>
              <Link to="/" className={styles.dropdownItem}>
                My Profile
              </Link>
              <Link to="/" className={styles.dropdownItem}>
                Settings
              </Link>
              <button
                className={styles.dropdownItem}
                onClick={() => {
                  localStorage.clear();
                  window.location.href = `http://localhost:3001/login`;
                }}
              >
                Logout
              </button>

              {viewportWidth <= 1117 && (
                <Link
                  to="/watchlist"
                  className={styles.dropdownItem}
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  WatchList
                </Link>
              )}

              {viewportWidth <= 562 && (
                <Link
                  to="/orders"
                  className={styles.dropdownItem}
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Orders
                </Link>
              )}

              {viewportWidth <= 562 && (
                <Link
                  to="/holdings"
                  className={styles.dropdownItem}
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Holdings
                </Link>
              )}

              {viewportWidth <= 562 && (
                <Link
                  to="/positions"
                  className={styles.dropdownItem}
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Positions
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
