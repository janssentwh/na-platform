import { renderPage } from '../../shared/services/utils.service';
import { UserSettingsPage } from '../pages/user-settings.page';
import * as React from 'react';
import { Route } from 'react-router';

export const userSettingsRoutes = () => {
    return [
        <Route path='/user-settings' key='user-settings-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', UserSettingsPage)} />
    ];
}