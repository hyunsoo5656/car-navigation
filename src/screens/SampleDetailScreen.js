// import React, { Component } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// export default class SampleDetailScreen extends Component() {
//   render() {
//     return (
//       <View style={{ fontSize: 50 }}>
//         <Text> 디테일 페이지</Text>
//         <TouchableOpacity>
//           <Text> 디테일의 디테일 가기</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text> 뒤로가기</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text> 처음으로 가기</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class SampleDetailScreen extends Component {
  constructor(props) {
    super(props);
    let pageId = props.navigation.getParam("pageId");
    if (!pageId) {
      pageId = 1;
    }
    this.state = {
      pageId: pageId,
    };
  }
  render() {
    return (
      <View style={{ fontSize: 50 }}>
        <Text> 디테일 페이지 {this.state.pageId}</Text>
        <TouchableOpacity
          onPress={
            (() => this.props.navigation.push("SampleDetails"),
            {
              pageId: this.state.pageId + 1,
            })
          }
        >
          <Text> 디테일의 디테일 가기 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text> 뒤로 가기 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
          <Text> 처음으로 가기 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("SampleDetails", {
              pageId: this.state.pageId + 1,
            })
          }
        >
          <Text> 디테일 가기 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
