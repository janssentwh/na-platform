import * as styles from './index.style';
import { ExampleArrayItem } from '../interfaces/example-array-item';
import { exampleArray$, getExampleArray } from '../services/example.service';
import * as React from 'react';
import { View } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Props extends RouteComponentProps {}
interface State {
    exampleArr: ExampleArrayItem[];
}

class _IndexPage extends React.Component<Props, State> {
    private destroyed$ = new Subject<void>();

    constructor(props: Props) {
        super(props);

        this.state = {
            exampleArr: [],
        } as State;
    }

    public render() {
        return (
            <View>
                <styles.h1>Open Source Mars Colony</styles.h1>
                <styles.h3>Croud Sourced City Plans for 1 Million Inhabitants on Mars</styles.h3>
                <View style={{ flex: 2, flexDirection: 'row', width: '50%' }}>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="Button A" />
                        <styles.p>Engineers ⋅ Artists ⋅ Programmers</styles.p>
                    </View>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="Button B" />
                        <styles.p>Extreme Engineering and Realism</styles.p>
                    </View>
                </View>
                <styles.h2>SPACE COLONISATION</styles.h2>
                <styles.h3>Mars Colonization Plans Developed by An International Team of Volunteers</styles.h3>
                <styles.h6>
                    Experts from major industries such as aerospace, architecture, logistics, and education have
                    kickstarted 50+ active projects
                </styles.h6>
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    <img
                        alt="Creative Commons License"
                        style={{ borderWidth: 0 }}
                        src="https://i.creativecommons.org/l/by/4.0/88x31.png"
                    />
                </a>
                <br />
                This work is licensed under a{' '}
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    {' '}
                    Creative Commons Attribution 4.0 International License.{' '}
                </a>
                <View style={{ flex: 2, flexDirection: 'column' }}>
                    <styles.h2>Live streams</styles.h2>
                    <styles.p>Modular Medicine Production</styles.p>
                </View>
            </View>
        );
    }

    public componentDidMount() {
        this.subscribeToExampleArray();

        getExampleArray();
    }

    private subscribeToExampleArray() {
        exampleArray$()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((arr) => {
                this.setState({ exampleArr: arr });
            });
    }
}

export const IndexPage = withRouter<Props, any>(_IndexPage);
