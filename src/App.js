import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';

/* TODO
   fix SASS, use variables, extends and mixins
   set up e-mail on contact page, ensure form works as intended
   set up the nav component so it shows on all pages
   clean up code and add any comments that are needed
*/

function App() {  
  return (
    <main className="Main">
    <Router>
         <Switch>
           <Route path='/About' component={About}/>
           <Route path='/Contact' component={Contact}/>
           <Route path='/Projects' component={Projects} exact/>
           <Route path='/' component={Home} exact/>  
         </Switch>
    </Router>
    </main>
  );
}

export default App;