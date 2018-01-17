import React, {Component} from "react";
import {Image, View, TouchableOpacity, TouchableHighlight} from "react-native";
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
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
  ListItem,
  Spinner
} from "native-base";
import {fetchDataAPI} from '../../redux/reducer/modules/TokopediaAdsReducer';
const Loading = () => (
  <View>
    <Spinner color='red' />
  </View>
);

function mapDispatchToProps(dispatch) {
  return {
    getTokopediaAds: () => dispatch(fetchDataAPI()).then((response) => {
    }).catch((error) => {
      console.log(error);
    })
  }
}

console.disableYellowBox = true;

class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.props.getTokopediaAds().then(() => {
      this.setState({
          loading: false
      });
    }).catch((error) => {
      console.log(error);
    })
  }
  render() {
    const {TokopediaAdsReducer} = this.props;
    return (<Content>
      {this.state.loading ? (
              <Loading />
            ) :
        TokopediaAdsReducer && TokopediaAdsReducer.map((item, index) => {
          return (<Card key={index}>
            <CardItem>
              <Left>
                <Thumbnail source={{
                    uri: item.product.image.m_ecs
                  }}/>
                <Body>
                  <Text>{item.product.name}</Text>
                  <Text note="note">{item.product.price_format}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody="cardBody">
              <Image source={{
                  uri: item.product.image.m_ecs
                }} style={{
                  height: 200,
                  width: null,
                  flex: 1
                }}/>
            </CardItem>
          </Card>)
        })
      }
    </Content>);
  }
}

const mapStateToProps = (state) => ({
  TokopediaAdsReducer: state.TokopediaAdsReducer.data && state.TokopediaAdsReducer.data.data
});
export default connect(mapStateToProps, mapDispatchToProps)(Promo)
