import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Recipes from '../../components/Recipes/Recipes';
import Recipe from '../../components/Recipe/Recipe';
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Favourities from '../../components/Favourities/Favourities';
import  './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation/>
        <Route exact path='/' component={Main}/>
        
        <Route path='/recipe' component={RecipeDetails}/> 
        <Route path='/favourities' component={Favourities}/>       
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
