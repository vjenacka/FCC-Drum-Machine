import React from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`

    span{
        display:block;
        min-width:150px;
        min-height:50px;
        background-color:#ff8f00;
        margin-top:70px;
        padding-top:10px;
        font-size:1.8rem;
        text-align:center;
    }
`

const Display = ({currentNote}) => {
    return (
        <Wrapper id='display'>
            <span>{currentNote}</span>
        </Wrapper>
    )
}

export default Display
