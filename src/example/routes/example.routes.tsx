import { renderPage } from '../../shared/services/utils.service';
import { ExamplePage } from '../pages/example.page';
import * as React from 'react';
import { Route } from 'react-router';

export const exampleRoutes = () => {
    return [
        <Route path='/' key='example-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', ExamplePage)} />
    ];
}