import {Card, Button} from 'react-native-material-ui';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {createCard} from './actions';
import {Actions as ViewDeckActions} from '../viewDeck';
import {connect} from 'react-redux';
import React from 'react';
import viewHandler from '../viewHandler';
export reducer from './reducers';
export * as Actions from './actions';

class CreateCard extends React.Component {
    constructor() {
        super();
        this.state = {
            side1: '',
            side2: ''
        };
    }
    render() {
        return <View style={({flex:1})}>
            <Card>
                <Text>Side 1</Text>
                <View style={styles.card}>
                    <TextInput style={styles.textInput} value={this.state.side1} onChangeText={side1 => this.setState({side1})} multiline={true}/>
                </View>
            </Card>
            <Card>
                <Text>Side 2</Text>
                <View style={styles.card}>
                    <TextInput style={styles.textInput} value={this.state.side2} onChangeText={side2 => this.setState({side2})} multiline={true}/>
                </View>
            </Card>
            <View style={styles.button}>
                <View style={({flex:2, alignItems: 'flex-start'})}>
                    <Button style={({alignSelf: 'flex-start', flex: 1})} 
                            onPress={this.props.switchToDeckView}
                            text={`You have ${this.props.cards && this.props.cards.length || 0} card${this.props.cards && this.props.cards.length == 1 ? '' : 's'} entered`}/>
                </View>
                <View style={({flex:1, alignItems: 'flex-end'})}>
                    <Button style={({flex: 1})} text="save" onPress={() => this.submit()} />
                </View>
            </View>
        </View>;
    }
    submit() {
        this.props.createCard(this.state.side1, this.state.side2);
        this.setState({side1:'',side2:''});
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, 
        height: 200, 
        borderColor: 'lightgrey', 
        margin: 10, 
        padding:10,
        borderRadius: 10
    },
    card: {
        alignItems: 'stretch',
        height: 250,
    },
    button: {
        alignContent:'flex-end',
        flexDirection: 'row',
        flex: 1
    }
});

viewHandler.register('createCards', connect(state => ({cards: state.cards}), {createCard,switchToDeckView:ViewDeckActions.switchToDeckView})(CreateCard));