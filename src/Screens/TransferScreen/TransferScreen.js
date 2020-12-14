import React from 'react';
import {View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Content, List, ListItem, Left, Body, Right, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon, ICON_TYPE} from '../../Assets/icons';
import {Title} from 'react-native-paper';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import useAppTheme from '../../Themes/Context';

const Tab = createMaterialTopTabNavigator();

const {height, width} = Dimensions.get('screen');

function MyTabs({navigation}) {
  return (
    <>
      <Header navigation={navigation} title="Transfer" screenName="Transfer" />

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
        <Tab.Screen name="Send" component={BuyScreen} />
        <Tab.Screen name="Receive" component={SellScreen} />
      </Tab.Navigator>
    </>
  );
}

const BuyScreen = () => {
  const { theme } = useAppTheme();
  return (
    <Content style={{ backgroundColor: theme.colors.background }}>
      <View
        style={{padding: 15, justifyContent: 'center', alignItems: 'center'}}>
        <Title>No crypto to send</Title>
        <Text
          style={{
            fontFamily: 'BlissPro',
            opacity: 1,
            textAlign: 'center',
          }}>
          Looks ike your wallets are empty, we can help you buy crypto
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: height / 3.5,
        }}>
        <View
          style={{
            borderColor: 'rgba(23, 73, 255, 0.5)',
            borderWidth: 5,
            backgroundColor: 'rgba(23, 73, 255, 1)',
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            type={ICON_TYPE.MATERIAL_COMMUNITY}
            name="bitcoin"
            size={50}
            color="#fff"
            style={{transform: [{rotate: '50deg'}]}}
          />
        </View>
      </View>
      <View style={{margin: 10}}>
        <Button label="Buy Crypto" />
      </View>
    </Content>
  );
};

const SellScreen = () => {
  const { theme } = useAppTheme();
  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View
        style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 2}}>
        <View
          style={{
            backgroundColor: 'rgba(23, 73, 255, 1)',
            height: 30,
            width: 30,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Icon
            type={ICON_TYPE.MATERIAL_COMMUNITY}
            name="arrow-left"
            size={20}
            color="#fff"
            style={{transform: [{rotate: '-50deg'}]}}
          />
        </View>
        <Title style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 1}}>
          Receive Crypto
        </Title>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 1}}>
            Select a wallet to receive crypto to.
          </Text>
        </View>
      </View>

      <List>
        <ListItem
          avatar
          noBorder
          style={{
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
            marginTop: 10,
          }}>
          <Left>
            <View
              style={{
                backgroundColor: '#FAC42F',
                // margin: 10,
                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
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
            <Text style={{fontFamily: 'BlissPro-Bold', opacity: 1}}>
              My Bitcoin Wallet
            </Text>
            <Text note>Bitcoin</Text>
          </Body>
          <Right>
            <Text>$0.00</Text>
            <Text note>0 BTC</Text>
            {/* <Text note>3:43 pm</Text> */}
          </Right>
        </ListItem>

        <ListItem
          avatar
          noBorder
          style={{
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
            marginTop: 15,
          }}>
          <Left>
            <View
              style={{
                backgroundColor: '#6AB04A',
                //margin: 10,
                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
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
            <Text style={{fontFamily: 'BlissPro-Bold', opacity: 1}}>
              My Bitcoin Cash Wallet
            </Text>
            <Text note>Bitcoin</Text>
          </Body>
          <Right>
            <Text>$0.00</Text>
            <Text note>0 BTC</Text>
            {/* <Text note>3:43 pm</Text> */}
          </Right>
        </ListItem>
      </List>
    </ScrollView>
  );
};

export default MyTabs;
