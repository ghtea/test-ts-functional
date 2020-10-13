import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import Units from "./routes/Units";
import Pages from "./routes/Pages";

type PropsApp = {};

// https://velog.io/@velopert/create-typescript-react-component
function App({}: PropsApp) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/units">
          <Units />
        </Route>
        <Route path="/pages">
          <Pages />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
