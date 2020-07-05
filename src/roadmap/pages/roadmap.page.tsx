import * as React from 'react';
import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class _RoadMap extends React.Component<Props, State> {
    public render() {
        return(
            <Text>RoadMap page is here.</Text>
        )
    }
}

export const RoadMapPage = withRouter<Props, any>(_RoadMap);