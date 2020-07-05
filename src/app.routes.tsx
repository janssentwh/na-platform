import { dddcatalogRoutes } from './3d-catalog/routes/3d-catalog.routes';
import { exampleRoutes } from './example/routes/example.routes';
import { contributorsRoutes } from './contributors/routes/contributors.routes';
import { documentsRoutes } from './documents/routes/documents.routes';
import { liveChatRoutes } from './live-chat/routes/live-chat.routes';
import { meetingsRoutes } from './meetings/routes/meetings.routes';
import { notificationsRoutes } from './notifications/routes/notifications.routes';
import { projectsRoutes } from './projects/routes/projects.routes';
import { roadmapRoutes } from './roadmap/routes/roadmap.routes';
import { surveysRoutes } from './surveys/routes/surveys.routes';
import { userSettingsRoutes } from './users/routes/user-settings.routes';
import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from './routing';
// import { LoginResponse } from './shared/interfaces/login';
import { renderPage } from './shared/services/utils.service';
import { NotFoundPageClass } from './shared/pages/not-found.page/not-found.page';

export const appRoutes = () => {
    return (
        <Switch>

            {/* Public */}
            {exampleRoutes()}
            {dddcatalogRoutes()}
            {contributorsRoutes()}
            {documentsRoutes()}
            {liveChatRoutes()}
            {meetingsRoutes()}
            {notificationsRoutes()}
            {projectsRoutes()}
            {roadmapRoutes()}
            {surveysRoutes()}
            {userSettingsRoutes()}

            {/* 404 */}
            <Route render={props => renderPage(props, true, '/auth/login', NotFoundPageClass)} />
        </Switch>

    )
}