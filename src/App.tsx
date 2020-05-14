import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main } from "./pages";
import { AppContainer } from "./App.styled";

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route path="/:locationName?">
          <Main />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
