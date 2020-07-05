// import { LoginResponse } from '../../shared/interfaces/login';
import { renderPage } from '../../shared/services/utils.service';
import { DddCatalogPage } from '../pages/3dcatalog.page';
import { Route } from 'react-router';
import * as React from 'react';

export const dddcatalogRoutes = () => {
    return [
        <Route path='/3d-catalog' key = '3dcatalog-page' exact={true}
            render = { props => renderPage(props, true, '/auth/login', DddCatalogPage)} />
    ];
};  