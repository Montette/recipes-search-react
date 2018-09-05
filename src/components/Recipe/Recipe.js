import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {RecipeBox, Button, PhotoContainer, TextContainer, Title, Image, Text, Span} from './RecipeStyle'
// import { Link } from 'react-router-dom';

// const RecipeBox = styled.div`
//     width: 400px;
//     margin: 50px; 
//  `
// // const PhotoContainer = styled.div`
// //     width: 400px;
// //     margin: 50px; 
// // `

// const TextContainer = styled.div`
//     background: white;
//     transform: translateY(-3px);
//     padding: 30px 20px;
// `
// const Image = styled.img`
//     width: 100%;
//     height: 250px; 
// `

// const Title = styled.h2`
//     color: #a51d1d;
//     text-transform: uppercase;
//     font-size: 20px;
//     margin-bottom: 15px; 
// `
// const Text = styled.p`
//     margin-bottom: 20px;
// `

// const Span= styled.span`
//     text-transform: uppercase;
//     font-weight: bold;
// `

// const Button = styled.button `
//     background: white;
//     border: 2px solid #c12020;
//     padding: 10px 15px;
//     text-transform: uppercase;
//     color: #c12020;
//     transition: .5s;

//     &:hover {
//         color: white;
//         background: #a51d1d;
//       }
// `

const Recipe = (props) => {
    // console.log(props.match);
    // console.log(match);
    console.log(props);
    return (
        <RecipeBox>
            
            <div>
                <Image src={props.image}/>
            </div>
            <TextContainer primary>
                <Title primary>{props.title.length < 25 ? props.title : props.title.substring(0,25) + '...' }</Title>
                <Text><Span>Publisher: </Span>{props.publisher}</Text>
               <Link to ={{
                   pathname: `/recipe/${props.id}`,
                   state: {title: props.title },
                   data: props
                 
               }}> <Button primary>View recipe</Button> </Link>
               {/* <Button primary onClick={props.favouriteAdd}>Add to favourities</Button> */}
            </TextContainer>
        
        </RecipeBox>
    )

}

export default Recipe;