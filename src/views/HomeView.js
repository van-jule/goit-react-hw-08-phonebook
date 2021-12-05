import React from "react";
import styles from "./Form.module.css";

export default function HomeView() {
  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Welcome! </h1>
      <p>To work with the phone book, please Log in or Register</p>
    </div>
  );
}
