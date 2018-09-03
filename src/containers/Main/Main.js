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
        recipes: [],
        loaded: true
    }

    // componentDidMount (){
    //     let url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=chicken&count=10`;
    //     fetch(url)
    //         .then(resp => {
    //             if(resp.ok) {
    //                 return resp.json()
    //             } else {
    //                 throw new Error("There is a connection error")
    //             }
                
    //         })
    //         .then(resp => {
    //             this.setState({recipes: resp.recipes, loaded: true})
    //         })
    //         .catch(err => console.log(err))
    // }

    onSubmitHandler = (event) => {
        this.setState({loaded: false});
        event.preventDefault();
       let recipeName = event.target.elements.recipeName.value;

        let url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
        fetch(url)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("There is a connection error")
                }
                
            })
            .then(resp => {
                this.setState({recipes: resp.recipes, loaded: true})
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
        
            <div>
                <Form submitSearch = {this.onSubmitHandler}/>
                {this.state.loaded ? <Recipes recipes={this.state.recipes}/> : <p>Loading...</p>}
            </div>
    
        );
    }
}

export default Main;
