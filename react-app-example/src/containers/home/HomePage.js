import React from "react";
import styled from "styled-components";
import { Feed } from "../../components/Feed";
import { FeedItem } from "../../components/homeComponents/FeedItem";

const StyledHomeContainer = styled.div`
  display: flex;
  max-width: 1080px;
  flex-direction: row;
`;


// Need to settle on final pictures
const dataList = [
  {
    title: "Best product by consumer trust vote",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    imgUrl: 'https://source.unsplash.com/random/640x400'
  },
  {
    title: "Bagged 10 awards from CES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    imgUrl: 'https://source.unsplash.com/random/640x400'
    },
];

export const HomePage = (props) => (
  <StyledHomeContainer>
    <Feed dataList={dataList} FeedItem={FeedItem} />
  </StyledHomeContainer>
);
