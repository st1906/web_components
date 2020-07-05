import React from 'react'
import styled from 'styled-components'
import 'component-library-stenciljs'

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
    const {productName, shortDescription, handleBuy, price} = data;
    return (
        <StyledProductContainer>
            <StyledProductName>{productName}</StyledProductName>
            <p>{shortDescription}</p>
            <p>Price (didn't change from 1st January 2017 - hover for inflation): 
                <inflation-converter money-value={price} start-date='2017/1/1'></inflation-converter>
            </p>
            <button onClick={handleBuy}>Buy</button>
        </StyledProductContainer>
    )
}
