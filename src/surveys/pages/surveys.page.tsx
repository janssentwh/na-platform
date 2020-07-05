import * as React from 'react';
import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class _Surveys extends React.Component<Props, State> {
    public render() {
        return(
            <Text>Surveys page is here.</Text>
        )
    }
}

export const SurveysPage = withRouter<Props, any>(_Surveys);