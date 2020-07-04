import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./containers/home/HomePage";
import { BuyPage } from "./containers/buy/BuyPage";
import { AboutPage } from "./containers/about/AboutPage";
import 'component-library-stenciljs'

function App() {
  return (
    <Router>
      <div className="App">
        <legal-banner></legal-banner>
        <toast-alert is-active="true" alert-title='An error happened' 
        alert-description='Send this error (RX20041) to support to learn more'></toast-alert>
        <Header />
        <Switch>
          <Route path="/about" exact component={AboutPage} />
          <Route path="/buy" exact component={BuyPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
