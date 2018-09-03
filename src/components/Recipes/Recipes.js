import React from 'react'

const Recipes = (props) => {

    let recipes = props.recipes.map(recipe => {
        return <li key={recipe.recipe_id}>{recipe.title}</li>
    })
    return (
        <ul>{recipes}</ul>
    )

}

export default Recipes;