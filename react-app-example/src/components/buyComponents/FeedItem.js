import React from 'react'
import styled from 'styled-components'

const StyledProductContainer = styled.div`
    max-width: 550px;
`

const StyledProductName = styled.h4`
    font-size: 2rem;
    color: white;
    background-color: darkblue;
    padding: 0.25rem 0;
`

export const FeedItem = ({data}) => {
    const {productName, shortDescription, handleBuy} = data;
    return (
        <StyledProductContainer>
            <StyledProductName>{productName}</StyledProductName>
            <p>{shortDescription}</p>
            <p>Price: 100 $</p>
            <button onClick={handleBuy}>Buy</button>
        </StyledProductContainer>
    )
}