import { StackNavigator, TabNavigator } from "react-navigation";

import Logout from "../Components/Logout";
import Login from "../components/Login";
import Register from "../Components/Register";

export const Tabs = TabNavigator({
  // feed: {
  //   screen: Feed,
  //   navigationOptions: {
  //     tabBarLabel: "Feed",
  //     title: "Feed"
  //   }
  // },
  // counter: {
  //   screen: Counter,
  //   navigationOptions: {
  //     tabBarLabel: "Counter",
  //     title: "Counter"
  //   }
  // },
  logout: {
    screen: Logout,
    navigationOptions: {
      tabBarLabel: "Logout",
      title: "Logout"
    }
  }
});

const navigator = StackNavigator({
  login: {
    screen: Login
  },
  register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  mainScreens: {
    screen: Tabs,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null
    }
  }
});

export default navigator;