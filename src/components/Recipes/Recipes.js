import React from 'react';
import Recipe from '../Recipe/Recipe';

import styled from 'styled-components';

const RecipesContainer = styled.div`
    padding: 0 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    
`




const Recipes = (props) => {

    let recipes = props.recipes.map(recipe => {
        return <Recipe key={recipe.recipe_id} title={recipe.title} image={recipe.image_url} publisher={recipe.publisher}/>
    })
    return (
        <RecipesContainer>  
        {recipes}  
        </RecipesContainer>
    )

}

export default Recipes;