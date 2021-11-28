import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Filter from "./components/Filter";
import AppBar from "components/AppBar";
import Container from "components/Container";
// import HomeView from "./views/HomeView";
import Login from "views/Login";
import Register from "views/Register";
import Contacts from "./views/Contacts";
import HomeView from "views/HomeView";

import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

const isAuth = false;

const App = () => {
  return (
    <Container>
      <AppBar />

      {/* <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList /> */}

      <Routes>
        <Route
          path="/"
          element={<PrivateRoute isAuth={isAuth} component={HomeView} />}
        />
        <Route
          path="/login"
          element={<PublicRoute isAuth={isAuth} component={Login} />}
        />
        <Route
          path="/register"
          element={<PublicRoute isAuth={isAuth} component={Register} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute isAuth={isAuth} component={Contacts} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
