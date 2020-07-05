import React from 'react';
import styled from 'styled-components';

const FeedItemContainer = styled.div`
    width: 640px;
`

export const FeedItem = ({data}) => {
    const {title, text, imgUrl, photoAttibution} = data;
    return(
        <FeedItemContainer>
            <h3>{title}</h3>
            <img src={imgUrl} alt={title}/>
            <p style={{fontSize: '0.3rem'}}><a href={photoAttibution}>Photo Credit</a></p>
            <p>{text}</p>
        </FeedItemContainer>
    )
}