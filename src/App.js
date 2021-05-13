import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Home from './Home';

function App() {
  return (
    <Router>
    <main className="Main">
      {/* figure out how to get the nav to hover above the home page and only show on mouseover and mouseout */}
         <Switch>
           <Route path='/About' component={About}/>
           <Route path='/Contact' component={Contact}/>
           <Route path='/Projects' component={Projects} exact/>
           <Route path='/' component={Home} exact/>   {/* fix this so that / and /Home land on the same page */}
         </Switch>
    </main>
    </Router>
  );
}

export default App;


/* Get SASS working
   test all pages on react router
   figure out images
   */
