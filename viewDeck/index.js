import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-material-ui';
import {connect} from 'react-redux';
import viewHandler from '../viewHandler';
import {Actions as CreateCardActions} from '../createCard';
import {DECK_VIEW} from './constants';
import {Actions as StudySessionActions} from '../studySession';
import * as Actions from './actions';
export {default as reducer, deckViewState} from './reducers';
export * as Actions from './actions';

class DisplayDeck extends React.Component{
    render() {
        return <View style={({flex:1,justifyContent:'center',alignContent:'center'})}>
            <ScrollView style={({flex:1})} showsVerticalScrollIndicator={true}>
                {this.props.cards.map((card, index) => <Card key={index}>
                    <View style={[{flex:1, alignItems: 'flex-start'}]}>
                        <Button icon="trash" iconSet="FontAwesome" accent text="" onPress={() => {
                            this.props.removeCard(card);
                        }} />
                    </View>
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
            <View style={({height: 50, flexDirection:'row'})}>
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
        flex:10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

viewHandler.register(DECK_VIEW, connect(
    state => ({cards: state.cards || []}), 
    {
        switchToCreate: CreateCardActions.switchToCreate, 
        switchToStudySession: StudySessionActions.switchToStudySession,
        ...Actions
    }
)(DisplayDeck));