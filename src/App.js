import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.sass';
import Home from './screens/Home/components/Home';
import About from './screens/About/components/About';
import Product from './screens/Product/components/Product';
import Header from './screens/Header/components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
          </Switch>
        </div>
        
        
      </div>
    </Router>
  );
}

export default App;
