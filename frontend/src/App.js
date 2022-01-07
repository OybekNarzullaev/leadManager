import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import Alerts from "./components/layout/Alerts";
import store from "./store";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "5px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
}

export default App;
