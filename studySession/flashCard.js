import React from 'react';
import {Card, Button} from 'react-native-material-ui';
import {View, TouchableNativeFeedback, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {RED, YELLOW, GREEN} from './constants';
import * as Actions from './actions';

export default FlashCards = connect(state => ({activeCard: state.activeCard}), Actions)(class FlashCards extends React.Component{
    render() {
        return <View>
            <TouchableNativeFeedback onPress={this.props.flipActive} background={TouchableNativeFeedback.Ripple()}>
                <View>
                    <Card>
                        <View style={[style.card]}>
                            <View style={[{flex: 10}, style.center]}>
                                <Text>
                                    {this.props.activeCard[`side${this.props.activeCard.currentSide}`]}
                                </Text>
                            </View>
                            <View style={[{flex:1}, style.center]}>
                                {this.props.activeCard.flipped ? <View style={({flexDirection:'row'})}>
                                    <Button style={{container: { backgroundColor: '#f00', flex:1} }} text="no" onPress={() => this.props.move(RED)} />
                                    <Button style={{container: { backgroundColor: '#ff0', flex:1} }} text="kind of" onPress={() => this.props.move(YELLOW)} />
                                    <Button style={{container: { backgroundColor: '#0f0', flex:1} }} text="yes" onPress={() => this.props.move(GREEN)} />
                                </View> : null}
                            </View>
                        </View>
                    </Card>
                </View>
            </TouchableNativeFeedback>
        </View>
    }
})

const style = StyleSheet.create({
    card: {
        height: 250
    },
    center: {
        justifyContent: 'center',
        alignItems:'center'
    },
    flex:{
        flex:1
    },
    verticalCenter: {
        justifyContent: 'center'
    }
})