import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../page/main/index";
import Detail from "../page/detail/index";
import ItemGuide from "../components/shared/guide/item.guide";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail" component={Detail} />

        {/* GUIDE */}
        <Route path="/guide/item" component={ItemGuide} />
      </Switch>
    </Router>
  );
};

export default Routes;
