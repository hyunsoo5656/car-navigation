import React from "react";

import MainTabNavigator from "./navigations/MainTabNavigator";
import AuthStack from "./navigations/AuthStack";

import AuthToken from "./utils/AuthToken";
import { AuthContext } from "./contexts/auth";

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.login = (token) => {
      this.setState({
        token: token,
        isLogined: true,
      });
    };

    this.logout = () => {
      this.setState({
        token: null,
        isLogined: false,
      });
    };

    this.state = {
      isLogined: false,
      token: null,
      logout: this.logout,
      login: this.login,
    };
  }

  async loginCheck() {
    const token = await AuthToken.get();
    if (token) {
      this.setState({
        isLogined: true,
        token: token,
      });
    } else {
      this.setState({
        isLogined: false,
        token: null,
      });
    }
  }

  // login(token) {
  //   this.setState({ isLogined: true, token: token })
  // }
  // logout() {
  //   this.setState({ isLogined: false, token: null })
  // }

  componentDidMount() {
    this.loginCheck();
  }

  render() {
    return (
      <React.Fragment>
        <AuthContext.Provider value={this.state}>
          {this.state.isLogined ? <MainTabNavigator /> : <AuthStack />}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}
