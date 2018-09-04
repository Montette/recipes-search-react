import React from 'react'
import {RecipeBox, Button, PhotoContainer, TextContainer, Title, Image, Text, Span} from '../RecipeStyle'

const API_KEY = 'dc8cbaf181f71f13872bb49e9a0bbe12';

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
   
    return (
        <RecipeBox>
            
            <div>
                <Image src={this.state.recipe.source_url}/>
            </div>
            <TextContainer>
                <Title>{this.state.title}</Title>
                <Text><Span>Publisher: </Span>{this.state.recipe.publisher}</Text>
            <Button>View recipe</Button> 
            </TextContainer>
    
    </RecipeBox>
    )

    }

}

export default RecipeDetails;