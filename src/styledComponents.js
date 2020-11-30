import styled, { createGlobalStyle } from 'styled-components';

import { MENU_ANIMATION_DURATION } from './config';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        color: #333;
        font-size: 16px;
    }
    
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    
    input,
    button {
        border: none;
        outline: none;
        font-size: 16px;
    }
    
    button {
        cursor: pointer;
    }
`;

export const StyledContentWrapper = styled.div`
    margin: 40px 40px 40px  ${props => props.isMenuOpen ? '240px' : '80px'};
    margin-top: 40px;
    transition: margin-left ${MENU_ANIMATION_DURATION}s;
`;
