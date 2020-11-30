import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 10px;
`;

export const StyledItem = styled.div`
    margin-bottom: 4px;
`;
export const StyledLabel = styled.span`
    width: 80px;
    display: inline-block;
`;
export const StyledBackLink = styled(Link)`
    display: block;
    color: #333;
    margin-top: 80px;
`;
