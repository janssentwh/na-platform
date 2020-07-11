
import { View } from 'react-native';
import * as styles from '../../pages/index.style';
import * as React from 'react';

type CTAProps = {
    title: string,
    subtitle: string
};

class _CTAWithSubtitle extends React.Component<CTAProps> {
    public render() {
        return (
            <View>
                <styles.cta onPress={() => alert('Hi!')} title={this.props.title} />
                <p>{this.props.subtitle}</p>
            </View>
        )
    }
}

export const CTAWithSubtitle = _CTAWithSubtitle;