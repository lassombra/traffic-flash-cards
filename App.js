import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {Toolbar} from 'react-native-material-ui';
import {store} from './state';
import {StateView} from './viewMap';
import firebase from 'react-native-firebase';

const auth = firebase.auth();
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    }
  }
  componentDidMount() {
    auth.signInAnonymously().then(() => {
      this.setState({
        isAuthenticated: true
      });
    })
  }

  render() {
    if (!this.state.isAuthenticated) {
      return null;
    } else {
      return (
          <Provider store={store}>
            <View style={styles.container}>
              <StatusBar hidden={true}/>
              <Toolbar style={({alignElements: 'center'})} centerElement={<Text>StopGo Study Cards {auth.currentUser.uid}</Text>}
                       isSearchActive={false}/>
              <StateView/>
            </View>
          </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    fontFamily: 'space-mono'
  }
});
