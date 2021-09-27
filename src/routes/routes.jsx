import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../page/main/index";
import Detail from "../page/detail/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
};

export default Routes;
