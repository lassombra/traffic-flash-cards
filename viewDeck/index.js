import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-material-ui';
import {connect} from 'react-redux';
import viewHandler from '../viewHandler';
import {switchToCreate} from '../createCard/actions';
import {DECK_VIEW} from './constants';
import {Actions as StudySessionActions} from '../studySession';
export reducer from './reducers';
export * as actions from './actions';

class DisplayDeck extends React.Component{
    render() {
        return <View style={({flex:1,justifyContent:'center',alignContent:'center'})}>
            <ScrollView style={({flex:10})} showsVerticalScrollIndicator={true}>
                {this.props.cards.map((card, index) => <Card key={index}>
                    <View style={styles.card}>
                        <View style={styles.side}>
                            <Text>{card.side1}</Text>
                        </View>
                        <View style={styles.side}>
                            <Text>{card.side2}</Text>
                        </View>
                    </View>
                </Card>)}
            </ScrollView>
            <View style={({flex:1, flexDirection:'row'})}>
                <View style={({flex:1})}>
                    <Button text="Input more cards" onPress={this.props.switchToCreate} />
                </View>
                <View style={({flex:1})}>
                    <Button text="Begin" onPress={this.props.switchToStudySession} />
                </View>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        justifyContent: 'center',
        alignContent: 'center'
    },
    side: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

viewHandler.register(DECK_VIEW, connect(state => ({cards: state.cards || []}), {switchToCreate, switchToStudySession: StudySessionActions.switchToStudySession})(DisplayDeck));