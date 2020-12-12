import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List, ListItem, Left, Body, Right, Text} from 'native-base';

export default ({navigation}) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Interest Account
        </Text>
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            padding: 10,
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
          }}>
          <View
            style={{
              backgroundColor: '#1749FF',
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}>
            {/* <Icon name="arrow-left" color="#000" size={20} /> */}
            <Icon name="percent" size={20} color="#fff" />
          </View>
          <Title
            style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 0.8}}>
            Earn Interest on Your Crypto
          </Title>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.5}}>
              Earn up to 12% instantly when you transfer crypto to your Interest
              Account.
            </Text>
          </View>
        </View>

        <View style={{marginTop: 50}}>
          <List>
            <ListItem avatar>
              <Left>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'rgba(23, 73, 255, 0.2)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //padding: 10,
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'BlissPro-Bold',
                      fontSize: 22,
                      opacity: 0.8,
                      color: '#1749FF',
                    }}>
                    1
                  </Text>
                </View>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    fontSize: 18,
                    opacity: 0.6,
                  }}>
                  Verify your Identity
                </Text>
                <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note />
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'rgba(23, 73, 255, 0.2)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //padding: 10,
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'BlissPro-Bold',
                      fontSize: 22,
                      opacity: 0.8,
                      color: '#1749FF',
                    }}>
                    2
                  </Text>
                </View>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    fontSize: 18,
                    opacity: 0.6,
                  }}>
                  Buy Crypto
                </Text>
                <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Body>
              <Right>
                <Text note />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'rgba(23, 73, 255, 0.2)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //padding: 10,
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'BlissPro-Bold',
                      fontSize: 22,
                      opacity: 0.8,
                      color: '#1749FF',
                    }}>
                    3
                  </Text>
                </View>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    fontSize: 18,
                    opacity: 0.6,
                  }}>
                  Earn Interest
                </Text>
                <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Body>
              <Right>
                <Text note />
              </Right>
            </ListItem>
          </List>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#1749FF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',
                color: '#fff',
                opacity: 0.8,
              }}>
              Verify My Identity
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#FAC42F',
                margin: 10,
                padding: 5,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="bitcoin" color="#fff" size={20} />
            </View>
            <Title>Bitcoin</Title>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="information" size={20} color="#616C6F" />
            <Text
              style={{fontFamily: 'BlissPro', opacity: 0.6, marginLeft: 10}}>
              Earn up to 4.4% annually on your BTC
            </Text>
          </View>
          <View
            style={{
              width: '95%',
              margin: 10,
              backgroundColor: '#eee',
              height: 2,
            }}
          />
        </View>

        <View style={{flexDirection: 'row', margin: 10}}>
          <View style={{flex: 3}}>
            <Text style={{fontFamily: 'BlissPro', opacity: 0.6}}>
              BTC Balance
            </Text>
            <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
              0 BTC
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'BlissPro', opacity: 0.6}}>
              Total Interest Earned
            </Text>
            <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
              0 BTC
            </Text>
          </View>
        </View>

        <View style={{margin: 10}}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: 'rgba(23, 73, 255, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',
                color: '#fff',
                opacity: 0.8,
              }}>
              Earn Interest
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
