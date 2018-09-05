import React from 'react'
import { Button, PhotoContainer, TextContainer, Title, Text, Span} from '../RecipeStyle'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const API_KEY = 'dc8cbaf181f71f13872bb49e9a0bbe12';

 const RecipeBox = styled.div`
    
    margin: 50px auto; 
    width: 100%;
    max-width: 900px;
    background-color: lightgrey;
 `

 const Image = styled.img`
    width: 100%;
    max-width: 900px;
    height: auto; 
`
const A = styled.a`
    color: #c12020;;
    display: block;
    font-weight: bold;
    margin-bottom: 20px;

`

class RecipeDetails extends React.Component {
    state = {
        recipe: null
    }

    componentDidMount (){
        let id = this.props.match.params.id;
        let title = this.props.location.state.title;
        console.log(title);
        let url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}&count=1`;
        fetch(url)
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
                this.setState({ recipe: resp})
            })
            .then (()=> console.log(this.state))

    }
    render (){
   let recipe = this.state.recipe ? this.state.recipe.recipes[0]: '';
   console.log(recipe);
   
  
    return (
        <React.Fragment>

        {
            this.state.recipe
            ? (  
         <RecipeBox> 
           
           
            <div>
                <Image src={recipe.image_url}/>
            </div>
            <TextContainer>
                <Title>{recipe.title}</Title>
                <Text><Span>Publisher: </Span>{recipe.publisher}</Text>
                <A href={recipe.source_url} target='blank'>See recipe on the original website</A>
            <Link to='/'><Button>Back</Button> </Link>
             </TextContainer> 
            
    </RecipeBox>
): null

}
</React.Fragment>

    )


    }

}

export default RecipeDetails;