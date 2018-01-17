/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    // Segment: { screen: Segment },
    // Toast: { screen: Toast },
    // Actionsheet: { screen: Actionsheet }
  }
);

export default DrawerExample;
