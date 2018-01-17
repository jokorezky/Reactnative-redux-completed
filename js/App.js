/* @flow */

import React from "react";

import {Platform} from "react-native";
import {Root} from "native-base";
import {StackNavigator} from "react-navigation";

// import Drawer from "./Drawer";
import AppNavigator from "./AppNavigator"
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
const store = configureStore()

// import Header from "./components/Header/";
// import Header1 from "./components/Header/1";
// import Header2 from "./components/Header/2";
// import Header3 from "./components/Header/3";
// import Header4 from "./components/Header/4";
// import Header5 from "./components/Header/5";
// import Header6 from "./components/Header/6";
// import Header7 from "./components/Header/7";
// import Header8 from "./components/Header/8";
// import Home from "./components/home/index";
// import Home1 from "./components/home1/index";
// import Olahraga from "./components/olahraga/index";
// import CouponDescription from "./components/couponDesc/index";
// import Login from "./components/login/index";
// import ForgotPassword from "./components/forgotPassword/index";
// import VerificationCode from "./components/verificationCode/index";
// import Signup from "./components/signUp/index";
// import QRCoder from "./components/qrcode/index";
// // Design Part II
// import CouponActiveDetail from "./components/couponActiveDetail/index";
// import MerchantDescript from "./components/merchantDescript/index";
// import Search from "./components/search/index";
// import Urutkan from "./components/urutkan/index";
// import Rating from "./components/rating/index";
// import Jarak from "./components/jarak/index";
// import Discount from "./components/discount/index";
// import ChangePassword from "./components/changePassword/index";
// import VerifPassword from "./components/verifPassword/index";
// import ChangeEmail from "./components/changeEmail/index";
// import SettingAccount from "./components/settingAccount/index";
// import Account from "./components/accounts/index";
// import WishList from "./components/wishlist/index";
// import ActiveCoupon from "./components/activeCoupon/index";
// import Cart from "./components/cart/index";
// import Merchant from "./components/merchant/index";
// import Sorting from "./components/sorting/index";
// import Basket from "./components/basket/index";
// import Category from "./components/category/index";
// import OlahragaCategory from "./components/olahragaCategory/index";
// import Maps from "./components/maps/index";

// const AppNavigator = StackNavigator({
//   Drawer: {
//     screen: Drawer
//   },
//   Home: {
//     screen: Home
//   },
//   Home1: {
//     screen: Home1
//   },
//   Olahraga: {
//     screen: Olahraga
//   },
//   CouponDescription: {
//     screen: CouponDescription
//   },
//   Login: {
//     screen: Login
//   },
//   ForgotPassword: {
//     screen: ForgotPassword
//   },
//   VerificationCode: {
//     screen: VerificationCode
//   },
//   Signup: {
//     screen: Signup
//   },
//   QRCoder: {
//     screen: QRCoder
//   },
//   // screen part II
//   CouponActiveDetail: {
//     screen: CouponActiveDetail
//   },
//   MerchantDescript: {
//     screen: MerchantDescript
//   },
//   Rating: {
//     screen: Rating
//   },
//   Search: {
//     screen: Search
//   },
//   Jarak: {
//     screen: Jarak
//   },
//   Discount: {
//     screen: Discount
//   },
//   ChangePassword: {
//     screen: ChangePassword
//   },
//   VerifPassword: {
//     screen: VerifPassword
//   },
//   ChangeEmail: {
//     screen: ChangeEmail
//   },
//   Urutkan: {
//     screen: Urutkan
//   },
//   SettingAccount: {
//     screen: SettingAccount
//   },
//   Account: {
//     screen: Account
//   },
//   WishList: {
//     screen: WishList
//   },
//   ActiveCoupon: {
//     screen: ActiveCoupon
//   },
//   Cart: {
//     screen: Cart
//   },
//   Merchant: {
//     screen: Merchant
//   },
//   Sorting: {
//     screen: Sorting
//   },
//   Basket: {
//     screen: Basket
//   },
//   Category: {
//     screen: Category
//   },
//   OlahragaCategory: {
//     screen: OlahragaCategory
//   },
//   Maps: {
//     screen: Maps
//   },
//
//   Header1: {
//     screen: Header1
//   },
//   Header2: {
//     screen: Header2
//   },
//   Header3: {
//     screen: Header3
//   },
//   Header4: {
//     screen: Header4
//   },
//   Header5: {
//     screen: Header5
//   },
//   Header6: {
//     screen: Header6
//   },
//   Header7: {
//     screen: Header7
//   },
//   Header8: {
//     screen: Header8
//   }
// }, {
//   initialRouteName: "Drawer",
//   headerMode: "none",
//   transitionConfig: getSlideFromRightTransition
//
// });

export default() => <Provider store={store}>
  <Root>
    <AppNavigator/>
  </Root>
</Provider>;
