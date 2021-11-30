import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PrivateRoute({ isAuth, component: Component }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log("isLoggedIn", isLoggedIn);
  return (
    <>
      <h1>PRIVATE</h1>
      {isLoggedIn ? <Component /> : <Navigate to="/login" />}
    </>
  );
}
