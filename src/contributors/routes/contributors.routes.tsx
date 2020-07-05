import { renderPage } from '../../shared/services/utils.service';
import { ContributorsPage } from '../pages/contributors.page';
import * as React from 'react';
import { Route } from 'react-router';

export const contributorsRoutes = () => {
    return [
        <Route path='/contributors' key='contributors-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', ContributorsPage)} />
    ];
}