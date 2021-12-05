import React from "react";
import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { authSelectors } from "redux/auth";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
