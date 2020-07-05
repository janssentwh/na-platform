import * as React from 'react';
import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

export class _UserSettings extends React.Component<Props, State> {
    public render() {
        return(
            <Text>UserSettings page is here.</Text>
        )
    }
}

export const UserSettingsPage = withRouter<Props, any>(_UserSettings);