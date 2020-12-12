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
          Addresses
        </Text>
      </Appbar.Header>
      <ScrollView>
        <List style={{backgroundColor: '#6A89CC'}}>
          <ListItem avatar noBorder>
            <Left>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 5,
                  borderRadius: 100,
                }}>
                <Icon name="bitcoin" color="#1749FF" size={20} />
              </View>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#fff',
                  //opacity: 0.6,
                }}>
                BITCOIN
              </Text>
            </Body>
            <Right>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <Icon name="chevron-down" size={20} color="#fff" />
              </View>
            </Right>
          </ListItem>
        </List>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'BlissPro',
                color: '#1749FF',
                fontSize: 18,
                opacity: 0.6,
              }}>
              Wallets
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="plus" size={20} color="#1749FF" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'BlissPro',
                // color: '#1749FF',
                fontSize: 18,
                opacity: 0.6,
              }}>
              My Bitcoin Wallet
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.6,
              }}>
              Default 0 BTC
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'BlissPro',
                color: '#1749FF',
                fontSize: 18,
                opacity: 0.6,
              }}>
              imported Addresses
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="plus" size={20} color="#1749FF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
