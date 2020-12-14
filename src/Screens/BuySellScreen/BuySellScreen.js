import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Content, List, ListItem, Left, Body, Right, Text} from 'native-base';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon, ICON_TYPE} from '../../Assets/icons';
import {Title} from 'react-native-paper';
import Badge from '../../Components/Badge';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import useAppTheme from '../../Themes/Context';

const Tab = createMaterialTopTabNavigator();

function MyTabs({navigation}) {
  return (
    <>
      <Header
        navigation={navigation}
        title="Buy & Sell"
        screenName="Buy & Sell"
      />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            color: '#fff',
            fontFamily: 'BlissPro-Bold',
          },
          style: {
            backgroundColor: '#192A56',
            elevation: 0,
          },
          indicatorStyle: {
            height: 5,
            backgroundColor: '#fff',
            borderRadius: 5,
          },
        }}>
        <Tab.Screen name="Buy" component={BuyScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
      </Tab.Navigator>
    </>
  );
}

const BuyScreen = () => {
  const { theme } = useAppTheme();
  return (
    <Content style={{ backgroundColor: theme.colors.background }}>
      <View style={{padding: 15}}>
        <Icon
          type={ICON_TYPE.MATERIAL_COMMUNITY}
          name="cart"
          size={30}
          color="#1749FF"
        />
        <Title
          style={{
            fontFamily: 'BlissPro-Bold',
            opacity: 1,
          }}>
          Buy With Cash or Card
        </Title>
        <Text
          style={{
            fontFamily: 'BlissPro',
            opacity: 0.8,
          }}>
          Select the crypto you want to buy
        </Text>
      </View>
      <List>
        <ListItem avatar>
          <Left>
            <View
              style={{
                backgroundColor: '#FAC42F',

                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}>
              <Icon
                type={ICON_TYPE.MATERIAL_COMMUNITY}
                name="bitcoin"
                color="#fff"
                size={20}
              />
            </View>
          </Left>
          <Body>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',

                opacity: 1,
              }}>
              Bitcoin
            </Text>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',

                opacity: 0.6,
              }}
              note>
              $14,073.04
            </Text>
          </Body>
          <Right>{/* <Text note>3:43 pm</Text> */}</Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <View
              style={{
                backgroundColor: '#6ab04c',
                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}>
              <Icon
                type={ICON_TYPE.MATERIAL_COMMUNITY}
                name="bitcoin"
                color="#fff"
                size={20}
              />
            </View>
          </Left>
          <Body>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',

                opacity: 1,
              }}>
              Bitcoin
            </Text>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',

                opacity: 0.6,
              }}
              note>
              $14,073.04
            </Text>
          </Body>
          <Right>{/* <Text note>3:43 pm</Text> */}</Right>
        </ListItem>
      </List>
    </Content>
  );
};

const SellScreen = () => {
  const { theme } = useAppTheme();
  const listData = [
    {
      id: 1,
      title: 'Verify Your identity',
      desc: 'Doing what you like will always keep you happy . .',
    },
    {
      id: 2,
      title: 'Buy Crypto',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Sell at Anytime',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View
        style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 2}}>
        <View>
          {/* <Icon name="arrow-left" color="#000" size={20} /> */}
          <Icon
            type={ICON_TYPE.MATERIAL_COMMUNITY}
            name="cart"
            size={30}
            color="#1749FF"
          />
        </View>
        <Title style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 1}}>
          Sell Crypto
        </Title>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.8}}>
            Verify your identity to sell crypto for cash.
          </Text>
        </View>
      </View>

      <View style={{marginTop: 50}}>
        <List>
          {listData.map((item, index) => {
            return (
              <ListItem avatar key={index}>
                <Left>
                  <Badge text={item.id} />
                </Left>
                <Body>
                  <Text
                    style={{
                      fontFamily: 'BlissPro-Bold',
                      fontSize: 18,
                      opacity: 1,
                    }}>
                    {item.title}
                  </Text>
                  <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                    {item.desc}
                  </Text>
                </Body>
                <Right>
                  <Text note />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </View>
      <View style={{margin: 10}}>
        <Button label="Apply Now" />
      </View>
    </ScrollView>
  );
};

export default MyTabs;
