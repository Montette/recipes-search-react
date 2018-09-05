import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RecipeBox = styled.div`
    width: 400px;
    margin: 50px; 
 `
// export const PhotoContainer = styled.div`
//     width: 400px;
//     margin: 50px; 
// `

export const TextContainer = styled.div`
    transform: translateY(-3px);
    padding: 30px 20px;
    background-color: ${props=> props.primary ? 'white': 'lightgrey'}
`
export const Image = styled.img`
    width: 100%;
    height: 250px; 
`

export const Title = styled.h2`
    color: ${props=> props.primary ? '#a51d1d': 'black'};
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 15px; 
`
export const Text = styled.p`
    margin-bottom: 20px;
`

export const Span= styled.span`
    text-transform: uppercase;
    font-weight: bold;
`

export const Button = styled.button `
    background: ${props=> props.primary ? 'white': 'lightgrey'};
    border: 2px solid #c12020;
    font-weight: bold;
    padding: 10px 15px;
    text-transform: uppercase;
    color: #c12020;
    transition: .5s;

    &:hover {
        color: white;
        background: #a51d1d;
        cursor: pointer;
      }
`