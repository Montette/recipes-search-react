import React from 'react'
import { Button, PhotoContainer, TextContainer, Title, Text, Span} from '../RecipeStyle'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// const API_KEY = 'dc8cbaf181f71f13872bb49e9a0bbe12';

const API_KEY = 'e496f8d598986d899ba1fda969e6135b';

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
        // let id = this.props.match.params.id;
        // let title = this.props.location.state.title;
        // console.log(title);
        // let url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}&count=1`;
        // fetch(url)
        //     .then(resp => {
        //         if(resp.ok){
        //             return resp.json()
        //         } else {
        //             throw new Error(err => {
        //                 console.log(err)
        //             })
        //         }
           
        //     })
        //     .then(resp => {
        //         console.log(resp)
        //         this.setState({ recipe: resp})
        //     })
        //     .then (()=> console.log(this.state))
        this.setState({recipe: this.props.location.data})
    }

    favouriteAddHandler = () => {
        fetch('https://recipes-933cf.firebaseio.com/recipe.json', {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            // body: JSON.stringify(this.state.recipe.recipes[0])
            body: JSON.stringify(this.state.recipe)

        })
        .then(res => res.json())
        .then(res => {
            console.log('zapisano');
            console.log(res)
        })
       
    }

    render (){
        console.log(this.props);
        console.log(this.props.location.data)
        console.log(this.state)
//    let recipe = this.state.recipe && this.state.recipe !== 'undefined' ? this.state.recipe.recipes[0]: '';
let recipe = this.state.recipe && this.state.recipe !== 'undefined' ? this.state.recipe: '';
   console.log(recipe);
   
  
    return (
        <React.Fragment>

        {
            this.state.recipe
            ? (  
         <RecipeBox> 
           
           
            <div>
                <Image src={recipe.image}/>
            </div>
            <TextContainer>
                <Title>{recipe.title}</Title>
                <Text><Span>Publisher: </Span>{recipe.publisher}</Text>
                <A href={recipe.source_url} target='blank'>See recipe on the original website</A>
            <Link to={'/'}><Button>Back</Button> </Link>
            <Button primary onClick={this.favouriteAddHandler}>Add to favourities</Button>
            
             </TextContainer> 
            
    </RecipeBox>
): null

}
</React.Fragment>

    )


    }

}

export default RecipeDetails;