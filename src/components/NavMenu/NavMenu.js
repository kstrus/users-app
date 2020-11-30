import React from 'react';

import ToggleButton from './ToggleButton';
import { StyledMenuWrapper, StyledMenuList, StyledNavLink } from './styledComponents';

const NavMenu = ({ isOpen, onToggle }) => {
    return (
        <StyledMenuWrapper isOpen={isOpen}>
            <ToggleButton type={isOpen ? 'close' : 'open'} onClick={onToggle} />
            <StyledMenuList>
                <li><StyledNavLink isOpen={isOpen} to='/' exact>Home</StyledNavLink></li>
                <li><StyledNavLink isOpen={isOpen} to='/users'>Users</StyledNavLink></li>
                <li><StyledNavLink isOpen={isOpen} to='/contact'>Contact</StyledNavLink></li>
            </StyledMenuList>
        </StyledMenuWrapper>
    );
};

export default NavMenu;
