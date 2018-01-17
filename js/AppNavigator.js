import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, Platform, AsyncStorage, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import {variables, Drawer} from "native-base";
import { actions } from 'react-native-navigation-redux-helpers';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { StyleProvider } from 'native-base';

import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";
import platform from "../native-base-theme/variables/platform";

import Home from "./pages/home/view";

const {
  popRoute,
} = actions;

const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {
  constructor() {
    super();
    this.state = { hasToken: false };
  }

  componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}
	onBackPress = () => {
		const { dispatch, nav } = this.props;
		// if (nav.index === 0) {
		// 	return false;
		// }
		dispatch(NavigationActions.back());

		return true;
	};

  popRoute() {
    this.props.popRoute();
  }

  render() {
    console.log('halo');
    return (
      <StyleProvider style={getTheme((this.props.themeState === 'material') ? material : undefined)}>
          <RouterWithRedux>
            <Stack key="root">
              <Scene key="home" component={Home} hideNavBar initial={true}/>
            </Stack>
          </RouterWithRedux>
      </StyleProvider>
    );
  }

}

const bindAction = dispatch => ({
  popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
