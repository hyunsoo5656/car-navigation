// // import React from "react";

// // import { View, StyleSheet, Text } from "react-native";
// // import IconPractice from "./practices/IconPractice";
// // import LoginScreen from "./screens/LoginScreen";
// // import SampleDetailScreen from "./screens/SampleDetailScreen";
// // import SampleDetailScreen from "./screens/SampleDetailScreen";

// import SampleHomeScreen from "./screens/SampleHomeScreen";
// import SampleDetailScreen from "./screens/SampleDetailScreen";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// // export default class Root extends React.Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <LoginScreen />
// //         {/* <SampleDetailScreen></SampleDetailScreen> */}
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     width: "100%",
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });

// const AppNavigator = createStackNavigator(
//   {
//     SampleHome: SampleHomeScreen,
//     SampleDetails: SampleDetailScreen,
//   },
//   {
//     initialRouteName: "SampleHome",
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;

// import React from "react";
// import { View, StyleSheet } from "react-native";
// // import IconPractice from "./practices/IconPractice";
// import LoginScreen from "./screens/LoginScreen";
// import SampleDetailScreen from "./screens/SampleDetailScreen";
// import SampleHomeScreen from "./screens/SampleHomeScreen";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// const AppNavigator = createStackNavigator(
//   {
//     SampleHome: SampleHomeScreen,
//     SampleDetails: SampleDetailScreen,
//   },
//   {
//     initialRouteName: "SampleHome",
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;
//-----------------------------------------------------------------
// import React from "react";

// import { View, StyleSheet } from "react-native";
// // import IconPractice from "./practices/IconPractice";
// // import LoginScreen from "./screens/LoginScreen";
// import SampleHomeScreen from "./screens/SampleHomeScreen";
// import SampleDetailScreen from "./screens/SampleDetailScreen";

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// const AppNaviagator = createStackNavigator(
//   {
//     sampleHome: SampleHomeScreen,
//     sampleDetail: SampleDetailScreen,
//   },
//   { initialRouteName: "sampleHome" }
// );

// const AppContainer = createAppContainer(AppNaviagator);
// export default class Root extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <LoginScreen /> */}
//         {/* <SampleHomeScreen /> */}
//         <AppContainer />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
//----------------------------------------------------------------------
import React from "react";

import { View, Text, StyleSheet } from "react-native";
import MainTabNavigator from "./navigations/MainTabNavigator";
import AuthStack from "./navigations/AuthStack";

const isLogined = true;
// const isLogined = false;

// export default function Root(props) {
//   return (
//     <React.Fragment>
//       {isLogined ? <MainTabNavigator /> : <AuthStack />}
//     </React.Fragment>
//   );
// }

export default class Root extends React.Component {
  render() {
    return (
      <React.Fragment>
        {isLogined ? <MainTabNavigator /> : <AuthStack />}
      </React.Fragment>
    );
  }
}
