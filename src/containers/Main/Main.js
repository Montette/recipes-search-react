import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Recipes from '../../components/Recipes/Recipes';
import Recipe from '../../components/Recipe/Recipe';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from '../../components/Form/Form';



// const url = 'http://food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2 ';
const API_KEY = 'dc8cbaf181f71f13872bb49e9a0bbe12';


class Main extends Component {
 
    
    render() {
        console.log(this.props.loaded);
        return (
        
            <div>
                <Form submitSearch = {this.props.onSubmitHandler}/>
                {this.props.loading ? <Recipes recipes={this.props.recipes}/> : <p>Loading...</p>}


            </div>
    
        );
    }
}

export default Main;
