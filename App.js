import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native'

import Login from './src/Login';
import Order from './src/Tab/Order';
import Search from './src/Tab/Search';
import Flexbox from './src/Tab/Flexbox';

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()





function MyStack(){
  return(
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options= {{ headerShown: false}}/>
          <Stack.Screen name= "MyTab" component={MyTab} options= {{ headerShown: true}}/>
      </Stack.Navigator>
  )
}

function MyTab(){
  return(
    <Tab.Navigator 
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarItemStyle: {width: 90},
          tabBarStyle: {backgroundColor: 'white'}
        }}>
      <Tab.Screen name="Flexbox" component={Flexbox} 
      options={{
          tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'gray'
      }}/>
      <Tab.Screen name="Order" component={Order} 
      options={{
          tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'gray'
      }}/>
      <Tab.Screen name="Search" component={Search} 
      options={{
          tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'gray'
      }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  textInput: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      marginTop: 30,
      paddingStart: 20
  }
})

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}