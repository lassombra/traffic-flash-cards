import React from 'react';
import {View, ScrollView, Text, StyleSheet, Clipboard} from 'react-native';
import {Card, Button} from 'react-native-material-ui';
import {connect} from 'react-redux';
import {default as viewHandler,ViewActions as ViewActions} from '../viewMap';
import {Actions as CreateCardActions} from '../createCard';
import {DECK_VIEW} from './constants';
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
                    <Button text="Export" onPress={this.export} />
                </View>
                <View style={({flex:1})}>
                    <Button text="Import" onPress={this.import} />
                </View>
                <View style={({flex:1})}>
                    <Button text="Begin" onPress={this.props.switchToStudySession} />
                </View>
            </View>
        </View>;
    }
    export = () => {
        Clipboard.setString(JSON.stringify(this.props.cards));
    };
    import = () => {
        Clipboard.getString()
            .then(result => JSON.parse(result))
            .then(cards => {
            if (!this.props.cards.length && cards && cards.length && cards.filter(card => card.side1 !== undefined && card.side2 !== undefined).length) {
                this.props.loadCards(cards.map((card, index) => ({
                    side1: card.side1,
                    side2: card.side2,
                    id: index
                })), cards.length)
            }
        });
    };
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
        switchToCreate: ViewActions.switchToCreate,
        loadCards: CreateCardActions.loadCards,
        switchToStudySession: ViewActions.switchToStudySession,
        ...Actions
    }
)(DisplayDeck));