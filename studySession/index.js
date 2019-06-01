import React from 'react';
import {View, InteractionManager, Text, StyleSheet} from 'react-native';
import {RED, GREEN, YELLOW, WHITE} from './constants';
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
        get whiteCount() {
            return this.props.deck ? this.props.deck.filter(card => card.color === WHITE).length : 0;
        }
        get yellowCount() {
            return this.props.deck ? this.props.deck.filter(card => card.color === YELLOW).legnth : 0;
        }
        get redCount() {
            return this.props.deck ? this.props.deck.filter(card => card.color === RED).length : 0;
        }
        get greenCount() {
            return this.props.deck ? this.props.deck.filter(card => card.color === GREEN).length : 0;
        }
        get fullCount() {
            return this.props.deck ? this.props.deck.length : 0;
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