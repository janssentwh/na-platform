import { renderPage } from '../../shared/services/utils.service';
import { ProjectsPage } from '../pages/projects.page';
import * as React from 'react';
import { Route } from 'react-router';

export const projectsRoutes = () => {
    return [
        <Route path='/projects' key='projects-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', ProjectsPage)} />
    ];
}