import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import Filter from "./components/Filter";
import AppBar from "components/AppBar";
import Container from "components/Container";
// import HomeView from "./views/HomeView";
// import Login from "views/Login";
// import Register from "views/Register";
// import Contacts from "./views/Contacts";
// import HomeView from "views/HomeView";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import { authOperations, authSelectors } from "./redux/auth";

const HomeView = lazy(() => import("./views/HomeView"));
const Contacts = lazy(() => import("./views/Contacts"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <h1>Показываем реакт-скелетон</h1>
  ) : (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute
                component={Login}
                restricted
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/register"
            element={<PublicRoute component={Register} restricted />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} />}
          />
          <Route path="/" element={<PublicRoute component={HomeView} />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
