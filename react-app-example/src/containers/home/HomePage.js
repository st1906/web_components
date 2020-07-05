import React from "react";
import styled from "styled-components";
import { Feed } from "../../components/Feed";
import { FeedItem } from "../../components/homeComponents/FeedItem";
import {Sidebar} from '../../components/Sidebar';
import 'component-library-stenciljs'

const StyledHomeContainer = styled.div`
  display: flex;
  max-width: 1080px;
  flex-direction: row;
  margin: 0 auto;
`;


const dataList = [
  {
    title: "Best product by consumer trust vote",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    imgUrl: 'https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    photoAttibution: 'https://unsplash.com/photos/HkN64BISuQA'
  },
  {
    title: "Bagged 10 awards from CES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    imgUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    photoAttibution: 'https://unsplash.com/photos/1SAnrIxw5OY'
    },
];

export const HomePage = () => (
  <StyledHomeContainer>
    <Feed dataList={dataList} FeedItem={FeedItem} />
    <Sidebar>
      <div style={{border: "black 1px solid", borderRadius: '16px', padding: '1rem 2rem'}}>
      <p>Social media links</p>
      <social-media-widget
        facebook-link='https://www.facebook.com/facebook'
        twitter-link='https://twitter.com/Twitter'
        youtube-link='https://www.youtube.com/user/YouTube'
      ></social-media-widget></div>
    </Sidebar>
  </StyledHomeContainer>
);
