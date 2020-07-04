import { renderPage } from '../../shared/services/utils.service';
import { NotificationsPage } from '../pages/notifications.page';
import * as React from 'react';
import { Route } from 'react-router';

export const notificationsRoutes = () => {
    return [
        <Route path='/notifications' key='notifications-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', NotificationsPage)} />
    ];
}