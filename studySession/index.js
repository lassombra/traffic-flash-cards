import React from 'react';
import {View, TouchableNativeFeedback, Text, StyleSheet} from 'react-native';
import {RED, GREEN, YELLOW, WHITE} from './constants';
import {default as viewHandler, ViewConstants} from '../viewMap';
import {connect} from 'react-redux';
import * as Actions from './actions';
import FlashCard from './flashCard';
import './monitor';
export reducer from './reducers';
export * as Actions from './actions';

const StudySession = connect(state => ({deck: state.deck, activeCard: state.activeCard, activeColor: state.activeColor}), {...Actions})(
    class StudySession extends React.Component {
        render() {
            if (!this.props.deck) {
                return <View style={[style.flex,style.center]}>
                    <Text style={style.shufflingText}>Shuffling</Text>
                </View>;
            }
            return <View style={[style.flex,style.verticalCenter]}>
                {this.props.activeCard ? <FlashCard /> : <TouchableNativeFeedback onPress={this.props.initOrShuffle} background={TouchableNativeFeedback.Ripple()}>
                        <View style={[style.flex,style.center]}>
                            <Text style={style.shufflingText}>End of current Deck</Text>
                        </View>
                    </TouchableNativeFeedback> }
            </View>;
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
        justifyContent: 'center',
        alignItems:'center'
    },
    flex:{
        flex:1
    },
    verticalCenter: {
        justifyContent: 'center'
    },
    shufflingText: {
        fontSize: 24
    }
})

viewHandler.register(ViewConstants.STUDY_SESSION_VIEW, StudySession);