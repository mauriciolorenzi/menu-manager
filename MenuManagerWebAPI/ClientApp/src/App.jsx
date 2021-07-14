import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CreateMenu } from './components/CreateMenu';
import { EditMenu } from './components/EditMenu';

import './custom.css'

export const App = () => {

    return (
        <Layout>
            <Route exact path='/'>
                <Home />
            </ Route>
            <Route path='/create' component={CreateMenu} />
            <Route path='/edit/:id' component={EditMenu} />
        </Layout>
    );
}
