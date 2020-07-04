import { renderPage } from '../../shared/services/utils.service';
import { RoadMapPage } from '../pages/roadmap.page';
import * as React from 'react';
import { Route } from 'react-router';

export const roadmapRoutes = () => {
    return [
        <Route path='/roadmap' key='roadmap-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', RoadMapPage)} />
    ];
}