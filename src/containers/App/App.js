import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Recipes from '../../components/Recipes/Recipes';
import Recipe from '../../components/Recipe/Recipe';
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../Main/Main';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation/>
        <Route exact path='/' component={Main}/>
        <Route path='/recipe' component={RecipeDetails}/>      
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
