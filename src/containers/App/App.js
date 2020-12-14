import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import withAlternateLayout from "../../hoc/AlternateLayout";
import withDefaultLayout from "../../hoc/DefaultLayout";
import PeoplePage from "../../pages/PeoplePage";
import reducer from "../../store/reducers";
import "./App.css";

const AlternateLayout = withAlternateLayout(PeoplePage);
const DefaultLayout = withDefaultLayout(PeoplePage);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/people/:id" component={AlternateLayout} />
          <Route path="/people" component={DefaultLayout} /> */}
          <Route exact path="/people/:id" component={PeoplePage} />
          <Route path="/people" component={PeoplePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
