import React from "react";
import './index.css';
import { Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
    <Header/>
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Portfolio' component={Portfolio} />
            <Route path='/Contact' component={Contact} />
        </Switch>
      </div>
      <Footer/>
      </div>
  );
}

export default App;

