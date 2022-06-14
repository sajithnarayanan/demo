import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      // for passing value between classes
    };
  }

  updateValue(username) {
    //console.log(username)
    this.setState({userName: username});
  }
  route = this.props;

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}></Image>
          <Text style={styles.textView}>Welcome to COMPANY</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="white"
            maxLength={10}
            onChangeText={username => this.updateValue(username)}></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}></TextInput>
          <TouchableOpacity
            onPress={() => console.log('asasct', this.state.userName)}>
            <Text>Dcaas</Text>
          </TouchableOpacity>
          <TouchableHighlight
            style={styles.buttonView}
            underlayColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('MyTab', {
                item: this.state.userName,
              });
            }}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#b4caed',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 180,
    width: 180,
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 10,
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 30,
    paddingStart: 20,
  },
  buttonView: {
    width: '60%',
    height: 40,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    width: '80%',
    height: 40,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingTop: 5,
  },
});
