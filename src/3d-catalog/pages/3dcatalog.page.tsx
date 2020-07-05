import * as React from 'react';
import * as div from './3dcatalog.style';
// import { Text } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {}

interface State {}

class _DddCatalogPage extends React.Component<Props, State> {
    public render() {
        return(
            <div.Text>3D Catalog page is here</div.Text>
        )
    }
}

export const DddCatalogPage = withRouter<Props, any>(_DddCatalogPage);
