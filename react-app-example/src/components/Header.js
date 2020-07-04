import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: lightcyan;
`;

const StyledHeaderTitle = styled.h2`
  padding: 0.5rem 1rem;
  font-family: fantasy;
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
`;

const Menu = (props) => (
  <nav style={{ display: "flex", alignItems: "center" }}>
    <ul style={{ display: "flex" }}>{props.children}</ul>
  </nav>
);

const MenuItem = (props) => (
  <li style={{ listStyle: "none" }}>
    <StyledLink to={props.link}>{props.text}</StyledLink>
  </li>
);

export const Header = (props) => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>MyCorp</StyledHeaderTitle>
      <Menu>
        <MenuItem text="Home" link="/" />
        <MenuItem text="About" link="/about" />
        <MenuItem text="Buy" link="/buy" />
      </Menu>
    </StyledHeader>
  );
};
