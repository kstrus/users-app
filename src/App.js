import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Home from './components/Home';
import Contact from './components/Contact';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import { GlobalStyle, StyledContentWrapper } from './styledComponents';

function App() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ selectedUserData, setSelectedUserData ] = useState({});

    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

    const handleUserSelect = data => setSelectedUserData(data);

    return (
        <React.Fragment>
            <GlobalStyle />
            <Router>
                <NavMenu isOpen={isMenuOpen} onToggle={handleMenuToggle}/>
                <StyledContentWrapper isMenuOpen={isMenuOpen}>
                    <Switch>
                        <Route path='/users'><Users onUserSelect={handleUserSelect}/></Route>
                        <Route path='/contact'><Contact /></Route>
                        <Route path='/user-profile/:id'><UserProfile data={selectedUserData} /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </StyledContentWrapper>
            </Router>
        </React.Fragment>
    );
}

export default App;
