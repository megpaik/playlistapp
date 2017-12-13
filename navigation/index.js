import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import NavigationStack from "./navigationStack";

class AppNavigation extends Component {

  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    if (navigationState.stateForLoggedIn.index <= 1) {
      return;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { navigationState, dispatch, isLoggedIn } = this.props;
    const state = isLoggedIn
      ? navigationState.stateForLoggedIn
      : navigationState.stateForLoggedOut;
    return (
      <NavigationStack navigation={addNavigationHelpers({ dispatch, state })} />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.LoginReducer.isLoggedIn,
    navigationState: state.NavigationReducer
  };
};

export default connect(mapStateToProps)(AppNavigation);