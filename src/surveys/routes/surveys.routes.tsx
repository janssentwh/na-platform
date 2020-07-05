import { renderPage } from '../../shared/services/utils.service';
import { SurveysPage } from '../pages/surveys.page';
import * as React from 'react';
import { Route } from 'react-router';

export const surveysRoutes = () => {
    return [
        <Route path='/surveys' key='surveys-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', SurveysPage)} />
    ];
}