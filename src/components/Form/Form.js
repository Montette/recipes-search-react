import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
   text-align: center;
   margin-top: 40px;
`

const Form = (props) => {

    return (
       <StyledForm onSubmit={props.submitSearch} >
           <input type='text' name='recipeName'/>
           <button>Search</button>
       </StyledForm>
    )

}

export default Form;
