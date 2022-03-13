import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home';
import About from './about';
import Cocktail from './cocktail';
import Error from './error';
import Navbar from './nav';
import SingleCocktail from './singlecocktail';


function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact path='/about'> 
        <About></About>
      </Route>
      <Route path='/cocktail/:id' ><SingleCocktail/> </Route> 
     <Route exact path='*'>
        <Error></Error>
      </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
