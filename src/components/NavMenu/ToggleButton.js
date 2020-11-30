import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import { StyledButtonWrapper, StyledToggleButton } from './styledComponents';

const ToggleButton = ({ type, onClick }) => {
    const icon = type === 'open' ? faBars : faTimes;

    return (
        <StyledButtonWrapper>
            <StyledToggleButton onClick={onClick}>
                <FontAwesomeIcon icon={icon} />
            </StyledToggleButton>
        </StyledButtonWrapper>
    )
};

export default ToggleButton;
