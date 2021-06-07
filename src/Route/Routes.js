import Login from "../Pages/Login";
import Landing from "../Pages/Landing";
import Register from "../Pages/Register";
import Welcome from "../Pages/Welcome";
import PageNotFound from "../Pages/PageNotFound";

export const routes = [
  {
    path: "/",
    component: Landing,
    exact: true,
    auth: false,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    auth: false,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
    auth: false,
  },
  {
    path: "/main",
    component: Welcome,
    exact: true,
    auth: true,
  },
];

export const generalRoutes = [
  {
    component: PageNotFound,
    auth: false,
  },
];
