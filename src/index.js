import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/info/Info";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/info" component={Info} exact={true} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
