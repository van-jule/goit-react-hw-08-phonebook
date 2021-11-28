import React from "react";
import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";

export default function AppBar() {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
}
