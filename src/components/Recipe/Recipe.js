import React from 'react';
import styled from 'styled-components';

const RecipeBox = styled.div`
    width: 400px;
    margin: 50px; 
`
const PhotoContainer = styled.div`
    width: 400px;
    margin: 50px; 
`

const TextContainer = styled.div`
    width: 400px;
    margin: 50px; 
`

const Recipe = (props) => {

    return (
        <RecipeBox>
           
            
            <PhotoContainer>
            <img src={props.image}/>
            </PhotoContainer>
            <TextContainer>
            <h2>{props.title}</h2>
            <p>{props.publisher}</p>
            </TextContainer>
        
        </RecipeBox>
    )

}

export default Recipe;