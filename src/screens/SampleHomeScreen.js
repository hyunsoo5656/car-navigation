import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class SampleHomeScreen extends Component {
  render() {
    return (
      <View style={{ fontSize: 50 }}>
        <Text> HOME 페이지 </Text>
        <TouchableOpacity
          onPress={(e) => {
            this.props.navigation.navigate("SampleDetails");
          }}
        >
          <Text> 디테일 가기 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SampleHomeScreen.navigationOptions = {
  // tabBarLabel: "홈",
  tabBarLabel: () => {
    return <Text style={{ marginBottom: 10, fontSize: 30 }}>홈</Text>;
  },
};

// const styles = StyleSheet.create({});
