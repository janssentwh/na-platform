import * as styles from './index.style';
import { ExampleArrayItem } from '../example/interfaces/example-array-item';
import { exampleArray$, getExampleArray } from '../example/services/example.service';
import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HeroPagePart } from '../pageparts/homepage/hero';

const image = { uri: '../assets/footer.png' };

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
                <HeroPagePart></HeroPagePart>
                
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
                <View style={{ flex: 2, flexDirection: 'column' }}>
                    <styles.h2>Live streams</styles.h2>
                    <styles.p>Modular Medicine Production</styles.p>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'space-around',
                        width: '100%',
                    }}
                >
                    <styles.p>ADMINISTRATION</styles.p>
                    <styles.p>BUILDINGS</styles.p>
                    <styles.p>ECONOMICS</styles.p>
                    <styles.p>EQUIPMENT</styles.p>
                    <styles.p>INFRASTRUCTURE</styles.p>
                    <styles.p>LOGISTICS</styles.p>
                    <styles.p>MEDICAL</styles.p>
                    <styles.p>PRODUCTION</styles.p>
                    <styles.p>TRANSPORT</styles.p>
                    <styles.p>UTILITIES</styles.p>
                    <styles.p>URBAN PLANNING</styles.p>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                    <img style={{ width: '25%' }} alt="Adminsitration" />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View
                        style={{
                            margin: '10px',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <styles.h1>50+</styles.h1>
                        <styles.h4>PROJECTS</styles.h4>
                    </View>
                    <View
                        style={{
                            margin: '10px',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <styles.h1>18</styles.h1>
                        <styles.h4>DOMAINS</styles.h4>
                    </View>
                    <View
                        style={{
                            margin: '10px',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <styles.h1>3K</styles.h1>
                        <styles.h4>FOLLOWERS</styles.h4>
                    </View>
                </View>

                <View style={{ flex: 2, flexDirection: 'row', width: '50%' }}>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="PROJECTS CATALOG" />
                        <styles.p>Explore all 50+ projects</styles.p>
                    </View>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="VR COLONY" />
                        <styles.p>Develop & test our VR Demo</styles.p>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View>
                        <img alt="Engineers" />
                        <styles.h3>Engineers</styles.h3>
                    </View>
                    <View>
                        <img alt="Artists" />
                        <styles.h3>ARTISTS</styles.h3>
                    </View>
                    <View>
                        <img alt="Programmers" />
                        <styles.h3>Programmers</styles.h3>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View
                        style={{
                            margin: '10px',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <styles.h1>130</styles.h1>
                        <styles.h4>ACTIVE VOLUNTEERS</styles.h4>
                    </View>
                    <View
                        style={{
                            margin: '10px',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <styles.h1>50+</styles.h1>
                        <styles.h4>COUNTRIES</styles.h4>
                    </View>
                    <View
                        style={{
                            margin: '10px',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <styles.h1>12Gb</styles.h1>
                        <styles.h4>PROJECT FILES</styles.h4>
                    </View>
                </View>

                <View style={{ flex: 2, flexDirection: 'row', width: '50%' }}>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="PROJECT ROADMAP" />
                        <styles.p>Find an Open Assignement</styles.p>
                    </View>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="TOP CREATORS" />
                        <styles.p>Without them, our heartbeat stops</styles.p>
                    </View>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="JOIN DISCORD" />
                        <styles.p>This is where we collaborate</styles.p>
                    </View>
                </View>

                <View>
                    <styles.h2>JOIN US ON DISCORD</styles.h2>
                    <styles.h3>
                        Finishing an Assignement will get you a Verified Status and Open Access to every channel
                    </styles.h3>
                </View>

                <img src="" alt="Discord Explanation" />

                <View style={{ flex: 2, flexDirection: 'row', width: '50%' }}>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="REDDIT" />
                        <styles.p>Follow our path to the Stars</styles.p>
                    </View>
                    <View style={{ flex: 1 }}>
                        <styles.cta onPress={() => alert('Hi!')} title="DISCORD" />
                        <styles.p>This is where we collaborate</styles.p>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ margin: '10px', width: '50%' }}>
                        <styles.h2>MANUALS</styles.h2>
                        <styles.p>When in Doubt, consult a Manual. They have all of the guidelines you need.</styles.p>
                    </View>
                    <View style={{ margin: '10px', width: '50%' }}>
                        <styles.h2>LIVE DOCS</styles.h2>
                        <styles.p>
                            These documents are currenntly maintained on Google Drive. We are working on a solution,
                            using the Web Portal. Slowly, these will get moved into the Web Portal.
                        </styles.p>
                    </View>
                </View>

                <View>
                    <ImageBackground
                        source={image}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <styles.h1 style={{ color: 'white' }}>VR DEMO</styles.h1>
                        <styles.h5 style={{ color: 'white' }}>
                            Experience life on Mars before you buy that Ticket!
                        </styles.h5>
                        <styles.h6 style={{ color: 'white' }}>
                            We have the goal of merging two of the most exciting technologies today - VR and Space
                            Exploration - and to overlay a layer of education on top of it.
                        </styles.h6>
                        <img src="" alt="VR thing" />
                        <styles.cta onPress={() => alert('Hi!')} title="Visit GitHub" />
                        <styles.p>Artists & Programmers needed</styles.p>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>ADMINSTRATION</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>BUILDINGS</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>ECONOMICS</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>EQUIPMENT</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>INFRASTRUCTURE</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>LOGISTICS</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>MEDICAL</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>PRODUCTION</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>TRANSPORT</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>UTILITIES</styles.p>
                            </View>
                            <View style={{ margin: '5px' }}>
                                <styles.p style={{ color: 'white' }}>URBAN PLANNING</styles.p>
                            </View>
                        </View>

                        <hr style={{ width: '100%' }} />

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingBottom: '20px',
                            }}
                        >
                            <View style={{ width: '30vw' }}>
                                <styles.h3 style={{ color: 'white' }}>COORDINATED BY</styles.h3>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Koenikova</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Mae Elizabeth Cook</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Felix</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Mitchell Farnsworth</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>NLDukey</styles.p>
                                    </View>
                                    <View style={{ marginLeft: '10px' }}>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Sean Wessels</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Kim von Däniken</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Vikas</styles.p>
                                        <styles.p style={{ color: 'white', margin: 0 }}>Elias Malak</styles.p>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '30vw' }}>
                                <View
                                    style={{
                                        width: '25vw',
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <styles.p style={{ color: 'white' }}>ICON</styles.p>
                                    <styles.p style={{ color: 'white' }}>ICON</styles.p>
                                    <styles.p style={{ color: 'white' }}>ICON</styles.p>
                                </View>
                                <View
                                    style={{
                                        width: '25vw',
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <styles.p style={{ color: 'white' }}>Legal stuff</styles.p>
                                    <styles.p style={{ color: 'white' }}>Legal stuff</styles.p>
                                    <styles.p style={{ color: 'white' }}>Legal stuff</styles.p>
                                </View>
                            </View>
                            <View style={{ width: '30vw' }}>
                                <styles.h3 style={{ color: 'white' }}>FOUNDERS</styles.h3>
                                <styles.p style={{ color: 'white' }}>Visual School MarsOrBust</styles.p>
                            </View>
                        </View>
                    </ImageBackground>
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
