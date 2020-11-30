import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from 'formik';

export const StyledListItem = styled.li`
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
`;

export const StyledUserLink = styled(Link)`
    color: #333;
    text-decoration: none;
    padding-bottom: 1px;
    
    &:hover {
        border-bottom: 1px solid #333;
    }
`;

export const StyledFormikForm = styled(Form)`
    display: flex;
    margin-bottom: 40px;
`;

export const StyledSearchInputWrapper = styled.div`
    position: relative;
    flex-grow: 1
`;

export const StyledSearchInput = styled.input`
    border: 1px solid #999;
    width: 100%;
    padding: 10px 15px;
    border-radius: 4px;
`;

export const StyledSearchButton = styled.button`
    color: #999;
    background-color: #fff;
    position: absolute;
    font-size: 22px;
    top: 7px;
    right: 15px;
`;

export const StyledClearButton = styled.button`
    background-color: #4caf50;
    color: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    margin-left: 20px;
`;
