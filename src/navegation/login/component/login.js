import React, { Component } from "react";

import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { Card, Text, Input, Button, Icon } from "react-native-elements";

export default class Login extends Component {
  login = () => {
    this.props.navigation.navigate("registro");
  };

  registro = () => {
    this.props.navigation.navigate("Registro");
  };
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.header}>
            <Text h1 style={{ marginTop: 50 }}>
              Bienvenido
            </Text>
            <Image
              style={styles.image}
              source={require("./../../../../assets/perfil_400x400.jpg")}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.input}>
              <Input
                containerStyle={{ marginBottom: 30, alignItems: "center" }}
                placeholder="                Email"
                leftIcon={{ type: "font-awesome", name: "address-book" }}
              />
              <Input
                secureTextEntry={true}
                placeholder="                Contraseña"
                leftIcon={{ type: "font-awesome", name: "expeditedssl" }}
              />
            </View>
            <View style={styles.btn}>
              <View>
                <Button
                  buttonStyle={{ backgroundColor: "blue" }}
                  title="Iniciar"
                  icon={<Icon name="check-circle" size={15} color="white" />}
                  onPress={this.login}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Button
                  buttonStyle={{ backgroundColor: "red" }}
                  title="Registro"
                  icon={<Icon name="check-circle" size={15} color="white" />}
                  onPress={this.registro}
                />
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  header: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    marginTop: 100,
    width: 350,
    flex: 1
  },
  input: {
    color: "black",
    justifyContent: "space-between"
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 50,
    resizeMode: "stretch"
  },
  btn: {
    marginTop: 70
  }
});
