import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../../App";
import Details from "../ItemDetails/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
