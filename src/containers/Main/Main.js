import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Recipes from '../../components/Recipes/Recipes';
import Recipe from '../../components/Recipe/Recipe';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from '../../components/Form/Form';


// const url = 'http://food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2 ';
const API_KEY = 'dc8cbaf181f71f13872bb49e9a0bbe12';


class Main extends Component {
    state = {
        recipes: []
    }

    onSubmitHandler = (event) => {

        event.preventDefault();
       let recipeName = event.target.elements.recipeName.value;

        let url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({recipes: resp.recipes})
            })
    }


    render() {
        return (
        
            <div>
                <Form submitSearch = {this.onSubmitHandler}/>
                <Recipes recipes={this.state.recipes}/>
            </div>
    
        );
    }
}

export default Main;
