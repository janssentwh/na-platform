import * as React from 'react';
import * as div from './not-found.style';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class NotFoundPage extends React.Component<Props, State> {
    public render() {
        return (
            <div.Text>Page not found</div.Text>
        )
    }
}

export const NotFoundPageClass = withRouter(NotFoundPage);