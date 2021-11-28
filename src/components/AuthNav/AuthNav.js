import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"

        // activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"

        // activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
