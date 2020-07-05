import { renderPage } from '../../shared/services/utils.service';
import { LiveChatPage } from '../pages/live-chat.page';
import * as React from 'react';
import { Route } from 'react-router';

export const liveChatRoutes = () => {
    return [
        <Route path='/live-chat' key='live-chat-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', LiveChatPage)} />
    ];
}