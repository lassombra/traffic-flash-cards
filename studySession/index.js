import React from 'react';
import {View, InteractionManager, Text, StyleSheet} from 'react-native';
import {VIEW} from './constants';
import {connect} from 'react-redux';
import viewHandler from '../viewHandler';
import * as Actions from './actions';
export reducer from './reducers';
export * as Actions from './actions';

const StudySession = connect(state => ({deck: state.deck}), {...Actions})(
    class StudySession extends React.Component {
        render() {
            if (!this.props.deck) {
                this.init();
                return <View style={style.center}>
                    <Text style={style.shufflingText}>Shuffling</Text>
                </View>;
            }
            return <View style={style.center}>
                <Text style={style.shufflingText}>Shuffling</Text>
            </View>;
        }
        init() {
            InteractionManager.runAfterInteractions(this.props.initOrShuffle);
        }
    });
;

const style = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    shufflingText: {
        fontSize: 24
    }
})

viewHandler.register(VIEW, StudySession);