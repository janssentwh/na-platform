
import { View } from 'react-native';
import { CTAWithSubtitle } from '../../components/buttons/cta-with-subtitle'
import * as styles from '../../pages/index.style';
import * as React from 'react';

class _HeroPagePart extends React.Component {

    public render() {
        return (
            <View>
                <styles.h1>Open Source Mars Colony</styles.h1>
                <styles.h3>Crowd Sourced City Plans for 1 Million Inhabitants on Mars</styles.h3>
                <View style={{ flex: 2, flexDirection: 'row', width: '50%' }}>
                    <View style={{ flex: 1 }}>
                        <CTAWithSubtitle title="Join The Team" subtitle="Engineers ⋅ Artists ⋅ Programmers"></CTAWithSubtitle>
                    </View>
                    <View style={{ flex: 1 }}>
                        <CTAWithSubtitle title="VR Trailer" subtitle="Extreme Engineering and Realism"></CTAWithSubtitle>
                    </View>
                </View>
            </View>
        )
    }
}

export const HeroPagePart = _HeroPagePart;