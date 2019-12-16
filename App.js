import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { Text, Input, Button, Icon } from "react-native-elements";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler'
import Header from './src/components/Header/Header';
import Login from './src/navegation/login/component/login';
import Registro from './src/navegation/registro/component/registro';



const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      title:'Parque Austral'
    }
  },
  Registro:{
    screen:Registro,
    navigationOptions:{
      title:'Registro'
    }
    
  }
},{headerLayoutPreset:'center'});

const styles = StyleSheet.create({
  
});

export default createAppContainer(LoginNavigator);