import * as React from 'react';
import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class _Contributors extends React.Component<Props, State> {
    public render() {
        return(
            <Text>Contributors page is here.</Text>
        )
    }
}

export const ContributorsPage = withRouter<Props, any>(_Contributors);