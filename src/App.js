import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import { authOperations } from "./redux/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      {/* <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList /> */}

      <Routes>
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route
          path="/register"
          element={<PublicRoute component={Register} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} />}
        />
        <Route path="/" element={<PrivateRoute component={HomeView} />} />
      </Routes>
    </Container>
  );
};

export default App;
