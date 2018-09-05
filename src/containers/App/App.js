import React, { Component } from 'react';

import RecipeDetails from '../../components/Recipe/RecipeDetails/RecipeDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Favourities from '../../components/Favourities/Favourities';
import  './App.css';
import Navigation from '../../components/Navigation/Navigation';
import Recipes from '../../components/Recipes/Recipes';
import Recipe from '../../components/Recipe/Recipe';

import Form from '../../components/Form/Form';

// const API_KEY = 'dc8cbaf181f71f13872bb49e9a0bbe12';

const API_KEY = 'e496f8d598986d899ba1fda969e6135b';

class App extends Component {

  state = {
    recipes: [],
    loaded: true
  }

  componentDidUpdate () {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
  }

  componentDidMount () {
    let data = localStorage.getItem('recipes');
    console.log(data);
    if(data) {
    this.setState({recipes: JSON.parse(data)})
    }
  }


  onSubmitHandler = (event) => {
    this.setState({loaded: false});
    event.preventDefault();
   let recipeName = event.target.elements.recipeName.value;

    let url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
    console.log(this.state);
    console.log(url);

    fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                throw new Error("There is a connection error")
            }
            
        })
        .then(resp => {
            this.setState({recipes: resp.recipes, loaded: true});
            console.log(this.state);
        })
        .catch(err => console.log(err))
  } 


  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation/>
        <Route exact path='/' render={() => <Main loading = {this.state.loaded} recipes={this.state.recipes} onSubmitHandler={this.onSubmitHandler}/>}/>  
        <Route path='/recipe/:id' component={RecipeDetails}/> 
        <Route path='/favourities' component={Favourities}/>       
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
