import React from 'react';
import { Formik, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { StyledFormikForm, StyledSearchInputWrapper, StyledSearchInput, StyledSearchButton, StyledClearButton } from './styledComponents';

const UsersSearch = ({ onSearch }) => {
    const handleSearch = values => onSearch(values.searchQuery);

    return (
        <Formik
            initialValues={{ searchQuery: '' }}
            onSubmit={handleSearch}
            onReset={handleSearch}
        >
            <StyledFormikForm>
                <StyledSearchInputWrapper>
                    <Field as={StyledSearchInput} type="text" name="searchQuery" placeholder="Find user" />
                    <StyledSearchButton type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </StyledSearchButton>
                </StyledSearchInputWrapper>
                <StyledClearButton type="reset">Clear</StyledClearButton>
            </StyledFormikForm>
        </Formik>
    );
};

export default UsersSearch;
