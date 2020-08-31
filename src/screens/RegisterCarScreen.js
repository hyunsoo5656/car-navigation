import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import IconTextInput from "../components/IconTextInput";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import ImagePickerSample from "../practices/ImagePickerSample";

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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity>
          <View
            style={{
              width: 114,
              height: 85,
              backgroundColor: "gray",
              marginBottom: 10,
            }}
          >
            <Image />
          </View>
        </TouchableOpacity>

        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: "logo-model-s" }}
          placeholder="모델명"
        />
        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: "ios-calendar" }}
          placeholder="연식"
        />
        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: "ios-business" }}
          placeholder="제조사"
        />
        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: "ios-barcode" }}
          placeholder="VIN"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  inputStyle: {
    marginBottom: 10,
  },
});
