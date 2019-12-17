import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Main from "./Containers/home-container";

type Props = {};

const Home = require("./components/home");
const NotFound = require("./components/errors/not_found");

const Routes = {
  get: function(config: any) {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          {/* <IndexRoute config={config} component={Home} /> */}
          {/* <Route path="*" component={NotFound} /> */}
        </Route>
      </Router>
    );
  }
};

export default Routes;
