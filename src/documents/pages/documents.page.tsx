import * as React from 'react';
import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class _Documents extends React.Component<Props, State> {
    public render() {
        return(
            <Text>Documents page is here.</Text>
        )
    }
}

export const DocumentsPage = withRouter<Props, any>(_Documents);