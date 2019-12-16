import React, { Component } from "react";
import Constants from "expo-constants";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Alert
} from "react-native";

import { Card, Button, Icon } from "react-native-elements";
var t = require("tcomb-form-native");
var Form = t.form.Form;

var Gender = t.enums({
  1: "Masculino",
  2: "Femenino"
});



var registro = t.struct({
  Nombre: t.String, // a required string
  Apellido: t.maybe(t.String), // an optional string
  Email: t.String,
  Edad: t.Number, // a required number
  Password: t.String,
  gender: Gender, // enum
  Acepto_condiciones: t.Boolean
  // a boolean
});


var options = {
    fields: {
      Password: {
        Password: true,
        secureTextEntry: true
      }
    }
  };

class Registro extends Component {

    save = () =>{
        const value = this._form.getValue("Nombre");
        
        console.log('value: ', value.Nombre);
    } 


  render() {
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View style={style.VImagen}>
            <Image
              style={style.image}
              source={require("./../../../../assets/perfil_400x400.jpg")}
            />
          </View>
          <View style={style.Vform}>
            <Card>
              <Form ref={c => this._form = c} type={registro}
                options={options}
               />
              <Button
                buttonStyle={{ backgroundColor: "blue" }}
                title="Registrar"
                icon={<Icon name="check-circle" size={15} color="white" />}
                onPress={this.save}
              />
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  image: {
    width: 100,
    height: 100
  },
  VImagen: {
    justifyContent: "center",
    alignItems: "center"
  },
  Vform: {}
});
export default Registro;
