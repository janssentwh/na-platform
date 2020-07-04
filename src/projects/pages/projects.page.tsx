import * as React from 'react';
import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class _Projects extends React.Component<Props, State> {
    public render() {
        return(
            <Text>Projects page is here.</Text>
        )
    }
}

export const ProjectsPage = withRouter<Props, any>(_Projects);