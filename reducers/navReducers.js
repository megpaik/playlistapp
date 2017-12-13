import { NavigationActions } from "react-navigation";

import AppNavigator, { Tabs } from "../navigation/navigationStack";

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  "login"
);

const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
  "mainScreens"
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);

const stateForLoggedIn = AppNavigator.router.getStateForAction(
  ActionForLoggedIn,
  stateForLoggedOut
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      };

    case 'LINK_REGISTER':
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams("register"),
          stateForLoggedOut
        )
      };

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 2,
            actions: [
              NavigationActions.navigate({ routeName: "login" }),
              NavigationActions.navigate({ routeName: "register" }),
              NavigationActions.navigate({ routeName: "mainScreens" })
            ]
          })
        )
      };

    /* Another option for RegisterSuccess
        nextState = {
          ...state,
          stateForLoggedIn: AppNavigator.router.getStateForAction(
            ActionForLoggedIn,
            AppNavigator.router.getStateForAction(
              AppNavigator.router.getActionForPathAndParams("signup"),
              stateForLoggedOut
            )
          )
        };
      */

    case "Navigation/BACK":
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          stateForLoggedOut
        )
      };

    case 'LOGOUT':
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.init({ routeName: "login" })]
          })
        )
      };

    /* Other logic for logging out, more cleaner but unlike the above isn't telling the reader 
           that navigation is reset, that's why I chose the *reset* one for the article. I prefer
           this one, what about you?
        
        case 'LOGOUT':
            nextState = { ...state, initialStateForLoggedIn, initialStateForLoggedOut}
            break;
    */

    case 'NAVIGATE_TO_LOGOUT':
      return {
        ...state,
        stateForLoggedIn: {
          ...state.stateForLoggedIn,
          routes: state.stateForLoggedIn.routes.map(
            route =>
              route.routeName === "mainScreens"
                ? { ...route, index: 2 }
                : { ...route }
          )
        }
      };

    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      };
  }
};

export default navigationReducer;