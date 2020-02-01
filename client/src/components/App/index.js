import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from '../Join';
import Chat from '../Chat';

export default () => {

    return (
        <div>
            <Router>
                <Route path="/" exact component={Join} />
                <Route path="/chat" component={Chat} />
            </Router>
        </div>
    );
}