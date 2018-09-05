import React from 'react';
import Recipes from '../Recipes/Recipes';
import Recipe from '../Recipe/Recipe';

class Favourities extends React.Component {
  
    state = {
        recipes: null
    }
    componentDidMount (){
     
        fetch('https://recipes-933cf.firebaseio.com/recipe.json')
            .then(resp => {
                if(resp.ok){
                    return resp.json()
                } else {
                    throw new Error(err => {
                        console.log(err)
                    })
                }
           
            })
            .then(resp => {
                console.log(resp)
                this.setState({ recipes: Object.keys(resp).map(key => resp[key])  })
            })
            .then (()=> console.log(this.state))

    }

  

    render (){

//    let recipes = this.state.recipes ? Object.keys(this.state.recipes).map((key)=> {
//        return <p>{}</p>
//    }) : null;
        let recipes = this.state.recipes ? this.state.recipes.map(recipe => {
            return <Recipe key={recipe.recipe_id} id={recipe.recipe_id} title={recipe.title} image={recipe.image_url} publisher={recipe.publisher} />
        }) : null;

console.log(this.state.recipes)
  
    return (
        <React.Fragment>
        {recipes}
</React.Fragment>

    )


    }

}

export default Favourities;