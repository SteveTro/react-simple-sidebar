import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import { Sidebar } from "../../src/components/Sidebar";
import { Item } from "../../src/components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <Sidebar
            onSelected={selected => {
              history.push(`/${selected}`);
            }}
          >
            <Sidebar.Nav default="home">
              <Item itemKey="home">
                <Item.Collapsed>
                  <FontAwesomeIcon icon={faHome} color="white" />
                </Item.Collapsed>
                <Item.Visible>
                  <FontAwesomeIcon icon={faHome} color="white" />
                  <span>Home</span>
                </Item.Visible>
              </Item>
              <Item itemKey="signal">
                <Item.Collapsed>
                  <FontAwesomeIcon icon={faChartLine} color="white" />
                </Item.Collapsed>
                <Item.Visible>
                  <FontAwesomeIcon icon={faChartLine} color="white" />
                  <span>Signalanalyzer</span>
                </Item.Visible>
              </Item>
              <Item itemKey="kpi">
                <Item.Collapsed>
                  <FontAwesomeIcon icon={faChartBar} color="white" />
                </Item.Collapsed>
                <Item.Visible>
                  <FontAwesomeIcon icon={faChartBar} color="white" />
                  <span>Kpi Dashboard</span>
                </Item.Visible>
              </Item>
            </Sidebar.Nav>
            <Sidebar.Content>
              <Redirect path="/" to="/home" />
              <Route
                path="/home"
                exact
                component={props => <div>Screen 1</div>}
              />
              <Route
                path="/signal"
                exact
                component={props => <div>Screen 2</div>}
              />
              <Route
                path="/kpi"
                exact
                component={props => <div>Screen 3</div>}
              />
            </Sidebar.Content>
          </Sidebar>
        )}
      ></Route>
    </Router>
  );
}

export default App;
