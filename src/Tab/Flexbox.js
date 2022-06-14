import {useRoute} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

class FlexContent extends Component {
  render() {
    return (
      <View>
        <Text>Hi this is my name {this.props.name}</Text>
      </View>
    );
  }
}

export default class Flexbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main_text: 'Hello ',
      sub_text: 'React ',
      final_text: 'Native',
    };
  }
  //route = this.props;

  componentDidMount() {
    console.log('1212', this.props.route);
  }

  updateText() {
    //console.log('update method clicked')
    this.setState({
      main_text: 'Hi (updated Text)',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style= {styles.textView}>{this.state.main_text}</Text>
                <Text style= {styles.textView}>{this.state.sub_text}</Text>
                <Text style= {styles.textView}>{this.state.final_text}</Text> */}
        {/* <TouchableHighlight style= {styles.button} onPress= {()=> this.updateText()} underlayColor= 'transparent'> */}
        {/* <Text style= {styles.textButton}>UPDATE</Text> */}
        {/* </TouchableHighlight> */}

        <Text style={styles.textView}>User name is </Text>
        {/* <FlexContent name = {this.props.route.params.username}></FlexContent> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgreen',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textView: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: '60%',
    height: 35,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonWebview: {
    width: '60%',
    height: 35,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    width: '100%',
    height: 30,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingTop: 5,
  },
});
