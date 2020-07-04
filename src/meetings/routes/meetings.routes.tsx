import { renderPage } from '../../shared/services/utils.service';
import { MeetingsPage } from '../pages/meetings.page';
import * as React from 'react';
import { Route } from 'react-router';

export const meetingsRoutes = () => {
    return [
        <Route path='/meetings' key='meetings-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', MeetingsPage)} />
    ];
}