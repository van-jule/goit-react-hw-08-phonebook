import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.navigation}>
      {!isLoggedIn && (
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
