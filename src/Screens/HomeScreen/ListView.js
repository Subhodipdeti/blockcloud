import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <View
                  style={{
                    backgroundColor: '#FAC42F',
                    margin: 10,
                    padding: 5,
                    borderRadius: 100,
                  }}>
                  <Icon name="bitcoin" color="#fff" size={20} />
                </View>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    opacity: 0.6,
                  }}>
                  Bitcoin
                </Text>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                  }}
                  note
                  numberOfLines={1}>
                  Wallet Balance
                </Text>
              </Body>
              <Right>
                <View>
                  <Text>O BTC</Text>
                  <Text note>$0.00</Text>
                </View>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <View
                  style={{
                    backgroundColor: '#FAC42F',
                    margin: 10,
                    padding: 5,
                    borderRadius: 100,
                  }}>
                  <Icon name="bitcoin" color="#fff" size={20} />
                </View>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    opacity: 0.6,
                  }}>
                  Bitcoin
                </Text>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                  }}
                  note
                  numberOfLines={1}>
                  Trading Wallet
                </Text>
              </Body>
              <Right>
                <View>
                  <Text>O BTC</Text>
                  <Text note>$0.00</Text>
                </View>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <View
                  style={{
                    backgroundColor: '#FAC42F',
                    margin: 10,
                    padding: 5,
                    borderRadius: 100,
                  }}>
                  <Icon name="bitcoin" color="#fff" size={20} />
                </View>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    opacity: 0.6,
                  }}>
                  Bitcoin
                </Text>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                  }}
                  note
                  numberOfLines={1}>
                  Earn 4.4% APY
                </Text>
              </Body>
              <Right>
                <View>
                  <Text>O BTC</Text>
                  <Text note>$0.00</Text>
                </View>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
