import React from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`

    span{
        background-color:#ff8f00;
        padding:5px;
    }
`

const Display = () => {
    return (
        <Wrapper id='display'>
            <span>Current note</span>
        </Wrapper>
    )
}

export default Display
