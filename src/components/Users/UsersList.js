import React from 'react';

import { StyledListItem, StyledUserLink } from './styledComponents';

const UsersList = ({ users = [], onUserSelect }) => {
    if (users.length === 0) return <div>No results</div>;

    return (
        <ul>
            {users.map(user => {
                return (
                    <StyledListItem key={user.id}>
                        <StyledUserLink to={`/user-profile/${user.id}`} onClick={() => onUserSelect(user)}>{user.name}</StyledUserLink>
                    </StyledListItem>
                );
            })}
        </ul>
    );
};

export default UsersList;
