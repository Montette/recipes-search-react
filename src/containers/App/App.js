import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Recipes from '../../components/Recipes/Recipes';
import Recipe from '../../components/Recipe/Recipe';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navigation/>
        <Route exact path='/' component={Recipes}/>
        <Route path='/recipe' component={Recipe}/>      
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
