import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../PageTitle';
import { StyledHeader, StyledItem, StyledLabel, StyledBackLink } from './styledComponents';

const UserProfile = ({ data }) => {
    if (Object.keys(data).length === 0) {
        return <div>Sorry, something went wrong...</div>;
    }

    const {  phone, email, website, address: { street, suite, zipcode, city }, company: { name, bs }} = data;

    return (
        <React.Fragment>
            <PageTitle>{data.name}</PageTitle>
            <StyledHeader>Contact data</StyledHeader>
            <StyledItem><StyledLabel>email:</StyledLabel>{email}</StyledItem>
            <StyledItem><StyledLabel>phone:</StyledLabel>{phone}</StyledItem>
            <StyledItem><StyledLabel>website:</StyledLabel>{website}</StyledItem>
            <StyledHeader>Address</StyledHeader>
            <StyledItem>{street} {suite}</StyledItem>
            <StyledItem>{zipcode} {city}</StyledItem>
            <StyledHeader>Company</StyledHeader>
            <StyledItem>{name}</StyledItem>
            <StyledItem>{bs}</StyledItem>
            <StyledBackLink to="/users"><FontAwesomeIcon icon={faArrowLeft} size="xs" /> Back to users list</StyledBackLink>
        </React.Fragment>
    );
};

export default UserProfile;
