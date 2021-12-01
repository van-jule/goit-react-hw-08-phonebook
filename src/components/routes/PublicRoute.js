import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  component: Component,
  restricted = false,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  console.log("shouldNavigate", shouldNavigate);
  return (
    <>
      <h1>PUBLIC</h1>
      {shouldNavigate ? <Navigate to="/" /> : <Component />}
    </>
  );
}
