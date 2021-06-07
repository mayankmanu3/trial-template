import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes, generalRoutes } from "./Routes";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {[...routes, ...generalRoutes].map(
            ({ path, exact, auth, component, redirect }, idx) => {
              return auth === false ? (
                <Route
                  key={idx}
                  path={path}
                  render={(props) => <Home {...props}>{component}</Home>}
                  exact={exact}
                />
              ) : (
                <Route
                  key={idx}
                  path={path}
                  render={(props) => (
                    <Main {...props} redirect={redirect}>
                      {component}
                    </Main>
                  )}
                  exact={exact}
                />
              );
            }
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
