import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MENU_ANIMATION_DURATION } from '../../config';

export const StyledMenuWrapper = styled.div`
    width: 200px;
    background-color: #000;
    color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${props => props.isOpen ? '0' : '-160px'};
    transition: left ${MENU_ANIMATION_DURATION}s;
`;

export const StyledButtonWrapper = styled.div`
    margin: 15px;
    text-align: right;
`;

export const StyledToggleButton = styled.div`
    font-size: 20px;
    cursor: pointer;
`;

export const StyledMenuList = styled.ul`
    margin: 20px 0;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    display: block;
    padding: 8px 15px;
    margin-bottom: 1px;
    opacity: 0.6;
    
    &.active,
    &:hover {
        ${props => props.isOpen && 'background-color: #4caf50;'}
        opacity: 1;
    }
`;
