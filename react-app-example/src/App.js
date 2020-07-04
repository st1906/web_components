import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./containers/home/HomePage";
import { BuyPage } from "./containers/buy/BuyPage";
import { AboutPage } from "./containers/about/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
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
