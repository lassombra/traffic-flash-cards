import {Card, Button} from 'react-native-material-ui';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {createCard} from './actions';
import {connect} from 'react-redux';
import React from 'react';

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
                    <TextInput style={styles.textInput} value={this.state.side1} onChangeText={side1 => this.setState({side1})} returnKeyType="next" onSubmitEditing={() => {
                        if(this.text2) {
                            this.text2.focus();
                        }
                    }} blurOnSubmit={false}/>
                </View>
            </Card>
            <Card>
                <Text>Side 2</Text>
                <View style={styles.card}>
                    <TextInput style={styles.textInput} value={this.state.side2} onChangeText={side2 => this.setState({side2})} returnKeyType="done" ref={el => this.text2 = el} onSubmitEditing={() => this.submit()}/>
                </View>
            </Card>
            <View style={styles.button}>
                <Button text="save" onPress={() => this.submit()} />
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
        height: 100, 
        borderColor: 'lightgrey', 
        margin: 10, 
        padding:10
    },
    card: {
        alignItems: 'stretch',
        height: 250,
    },
    button: {
        justifyContent:'flex-end',
        alignItems:'flex-end',
        flex: 1
    }
})

export default connect(undefined, {createCard})(CreateCard);