import React, {Component} from "react";
import {
  Image,
  View,
  ScrollView,
  ImageBackground,
  StatusBar,
  RefreshLayoutConsts,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import {connect} from 'react-redux';
import {Actions} from "react-native-router-flux";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title
} from "native-base";
import AdsTokopedia from '../../components/ads/view';
class Home extends Component {
  render() {
    const {TokopediaAdsReducer} = this.props
    console.log(TokopediaAdsReducer);
    return (<Container>
      <Header>
        <Body>
          {TokopediaAdsReducer &&
            <Title>{TokopediaAdsReducer && TokopediaAdsReducer.header && TokopediaAdsReducer.header.meta.display.toUpperCase()} TOKOPEDIA</Title>
          }
        </Body>
        <Right/>
      </Header>
      <AdsTokopedia/>
    </Container>);
  }
}
const mapStateToProps = (state) => ({
  TokopediaAdsReducer: state.TokopediaAdsReducer.data && state.TokopediaAdsReducer.data
});
export default connect(mapStateToProps)(Home);
