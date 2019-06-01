import React from 'react';
import {View} from 'react-native';
import {VIEW} from './constants';
import viewHandler from './viewHandler';
export reducer from './reducers';
export * as Actions from './actions';

class StudySession extends React.Component {
    render() {
        return <View></View>;
    }
}

viewHandler.register(VIEW, StudySession);