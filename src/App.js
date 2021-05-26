import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {  
  return (
    <main className="Main">
    <Router>
         <Switch>
           <Route path='/About' component={About}/>
           <Route path='/Contact' component={Contact}/>
           <Route path='/Projects' component={Projects} exact/>
           <Route path='/' component={Home} exact/>   {/* fix this so that / and /Home land on the same page */}
         </Switch>
    </Router>
    </main>
  );
}

export default App;