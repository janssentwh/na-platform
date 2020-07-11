import styledNative from 'styled-components/native';
import styled from 'styled-components';

export const h1 = styled.h1`
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: 800;
`;

export const h2 = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`;

export const h3 = styled.h3`
    display: block;
    font-size: 1.17em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: thin;
`;

export const h4 = styled.h4`
    display: block;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`;

export const h5 = styled.h5`
    display: block;
    font-size: 0.83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`;

export const h6 = styled.h6`
    display: block;
    font-size: 0.67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`;

export const p = styledNative.Text`
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
`;

export const cta = styledNative.Button`
    border-radius: 30px;
    background-color: red;
`;

export const AppSafeArea = styledNative.SafeAreaView`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ScrollContent = styledNative.ScrollView`
    width: 100%;
    height: 100%;
`;
