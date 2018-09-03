import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background: darkblue;
    height: 70px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 25px;
    margin: 0;
`



const Navigation = () => {

    return (
        <Header style={{}}>
        <Title>Recipes Search</Title>
        </Header>
    )

}

export default Navigation;
