import React from 'react';
import { StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {Toolbar} from 'react-native-material-ui';
import {store} from './state';
import {StateView} from './viewMap';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

const auth = firebase.auth();
GoogleSignin.configure({
  webClientId: '772181917789-p26gq2acvv1pmbpbo14781q3mrl5kmde.apps.googleusercontent.com',
  offlineAccess: true
});
window.GoogleSignin = GoogleSignin;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      googleSigningIn: false,
      googleAuthenticated: false
    }
  }
  componentDidMount() {
    auth.signInAnonymously().then((credential) => {
      this.setState({
        isAuthenticated: true
      });
      this.anonymousUser = credential;
    });
    GoogleSignin.signInSilently().then(result => this.applySignIn(result)).catch(() => {});
  }

  signInGoogle = () => {
    this.setState({googleSigningIn: true});
    GoogleSignin.signIn().then(result => {
      this.applySignIn(result);
      this.setState({googleSigningIn: false});
    }).catch(() => {
      this.setState({googleSigningIn: false});
    });
  };

  applySignIn(googleResult) {
    debugger;
    const credential = firebase.auth.GoogleAuthProvider.credential(googleResult.idToken, googleResult.accessToken);
    this.anonymousUser.user.linkWithCredential(credential).catch(() => {
      auth.signInWithCredential(credential);
    }).then(() => {
      this.recheckGoogleSignin();
    });
  }
  recheckGoogleSignin() {

  }

  render() {
    if (!this.state.isAuthenticated) {
      return null;
    } else {
      return (
          <Provider store={store}>
            <View style={styles.container}>
              <StatusBar hidden={true}/>
              <Toolbar style={({alignElements: 'center'})} rightElement={this.signinButton}
                   isSearchActive={false}/>
              <StateView/>
            </View>
          </Provider>
      );
    }
  }
  get signinButton() {
    if (!this.state.googleAuthenticated) {
      return <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Light}
          onPress={this.signInGoogle}
          disabled={this.state.googleSigningIn}
      />
    } else {
      return null;
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
