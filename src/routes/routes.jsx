import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../page/main/index";
import Detail from "../page/detail/index";
import Add from "../page/form/add";
import ItemGuide from "../components/shared/guide/item.guide";
import FormGuide from "../components/shared/guide/form.guide";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail" component={Detail} />
        <Route path="/form/add" component={Add} />

        {/* GUIDE */}
        <Route path="/guide/item" component={ItemGuide} />
        <Route path="/guide/form" component={FormGuide} />
      </Switch>
    </Router>
  );
};

export default Routes;
