import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class CarListItem extends React.Component {
  static defaultProps = {
    image: "",
    modelName: "",
    year: "",
    vin: "",
    manufacturer: "",
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          heigt: 90,
          flexDirection: "row",
          marginBottom: 10,
          alignItems: "center",
          //   resizeMode: "contain",
        }}
      >
        <Image
          source={{ uri: this.props.image }}
          style={{
            height: 90,
            width: 80,
            marginRight: 10,
            // resizeMode: "contain",
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 22, color: "#333", fontWeight: "bold" }}>
            {this.props.modelName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-calendar"
              size={15}
              style={{
                marginRight: 6,
                fontSize: 12,
                color: "#666",
              }}
            />
            <Text
              style={{
                marginRight: 6,
                fontSize: 12,
                color: "#666",
              }}
            >
              {this.props.manufacturer}
            </Text>
            <Text
              style={{
                marginRight: 6,
                fontSize: 12,
                color: "#666",
              }}
            >
              {this.props.year}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
