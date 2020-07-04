import React from 'react';
import styled from 'styled-components'

const StyledFeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const Feed = (props) => {
    const {dataList, FeedItem} = props;
    return <StyledFeedContainer>
        {dataList.map((item, index) => 
         <FeedItem key={index} data={item}/>)}
    </StyledFeedContainer>
    
}