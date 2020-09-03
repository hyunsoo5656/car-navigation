import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class CarStatusInfo extends Component {
  static defaultProps = {
    auctionState: "none", //
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.auctionState === "bidding") {
      return (
        <View style={styles.statusInfoWrap}>
          <Text style={{ color: "tomato" }}> 경매 진행중 </Text>
        </View>
      );
    } else {
      // 경매중 아닐때

      return (
        <View>
          <Text style={{ color: "#333" }}> 진행중인 경매가 없습니다. </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  statusInfoWrap: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
