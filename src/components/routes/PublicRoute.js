import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ isAuth, component: Component }) {
  return (
    <>
      <h1>PUBLIC</h1>
      {isAuth ? <Navigate to="/" /> : <Component />}
    </>
  );
}
