import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, } from "react-native";
import {Text} from 'react-native-elements'
 export default function Header()  {
  
  return (
    <View style={styles.container}>
      
      <Text h1>
        Hello word
      </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
   
  }
});
