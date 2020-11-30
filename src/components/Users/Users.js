import React, { useState, useEffect } from 'react';

import PageTitle from '../PageTitle';
import UsersList from './UsersList';
import UsersSearch from './UsersSearch';

const Users = ({ onUserSelect }) => {
    const [ users, setUsers ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect(() => {
        fetch('/users.json')
            .then(response => response.json())
            .then(data => setUsers(data.users));
    }, []);

    const shouldShowUser = user => user.name.toLowerCase().includes(searchQuery.toLowerCase());

    const handleSearch = text => setSearchQuery(text);

    return (
        <React.Fragment>
            <PageTitle>Users</PageTitle>
            <UsersSearch onSearch={handleSearch} />
            <UsersList users={users.filter(user => shouldShowUser(user))} onUserSelect={onUserSelect} />
        </React.Fragment>
    );
};


export default Users;
