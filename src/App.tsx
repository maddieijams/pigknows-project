import React, {useState} from "react";
import Users from "./Users";
import Navigation from "./Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  const [refreshClicked, setRefreshClicked] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Navigation setRefreshClicked={setRefreshClicked} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Users
              refreshClicked={refreshClicked}
              setRefreshClicked={setRefreshClicked}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
