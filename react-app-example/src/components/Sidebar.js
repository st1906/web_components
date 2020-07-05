import React from 'react'
import styled from 'styled-components'

const StyledAside = styled.aside`
    width: 33vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
`

export const Sidebar = (props) => <StyledAside>{props.children}</StyledAside>