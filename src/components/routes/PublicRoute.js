import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PublicRoute({ component: Component }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <h1>PUBLIC</h1>
      {isLoggedIn ? <Navigate to="/" /> : <Component />}
    </>
  );
}
