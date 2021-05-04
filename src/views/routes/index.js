import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import DashBoard from '../pages/Dashboard/Dashboard';

function App() {
    return (
        <Container maxWidth="md" className="wrapper">
            <Switch>
                <Route exact path="/">
                    <DashBoard />
                </Route>
                <Route path="/settings">
                    <div>Settings</div>
                </Route>
                <Route path="*">
                    <div>No match</div>
                </Route>
            </Switch>
        </Container>
    );
}

export default App;
