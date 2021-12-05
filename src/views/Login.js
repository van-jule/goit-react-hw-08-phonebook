import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "./Form.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Login</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </div>
  );
}
