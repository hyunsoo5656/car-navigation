import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import IconTextInput from "../components/IconTextInput";

export default class RegisterCarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carImage: {},
      modelName: "",
      year: "",
      manufacturer: "",
      vin: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View>
            <Image />
          </View>
        </TouchableOpacity>

        <IconTextInput iconProps={{ name: "ios-car" }} placeholder="모델명" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
