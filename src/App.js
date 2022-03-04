import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { TicketPage } from "./pages/TicketPage";
import { DataTicketPage } from "./pages/DataTicketPage";
import { IzbranoePage } from "./pages/IzbranoePage";
import { OrderPage } from "./pages/OrderPage";
import { Header } from "./pages/Header";
import { store } from "./redux";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="app-wrapper">
            <Header />
            <Switch>
              <Route exact path="/">
                <TicketPage />
              </Route>
              <Route exact path="/dataTicketPage">
                <DataTicketPage />
              </Route>
              <Route exact path="/izbranoe">
                <IzbranoePage />
              </Route>
              <Route exact path="/order">
                <OrderPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
