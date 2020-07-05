import { renderPage } from '../../shared/services/utils.service';
import { DocumentsPage } from '../pages/documents.page';
import * as React from 'react';
import { Route } from 'react-router';

export const documentsRoutes = () => {
    return [
        <Route path='/documents' key='documents-page' exact={true}
            render={props => renderPage(props, true, '/auth/login', DocumentsPage)} />
    ];
}