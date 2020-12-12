import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import SwapScreen from '../../Screens/SwapScreen/SwapScreen';
import BuySellScreen from '../../Screens/BuySellScreen/BuySellScreen';
import ActivityScreen from '../../Screens/ActivityScreen/ActivityScreen';
import TransferScreen from '../../Screens/TransferScreen/TransferScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomStack = props => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#192A56"
    barStyle={{
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 8,
    }}>
    <Tab.Screen
      name="Activity"
      component={ActivityScreen}
      options={{
        tabBarLabel: (
          <Text style={{fontFamily: 'BlissPro-Bold'}}>Activity</Text>
        ),
        //tabBarColor: '#009387',
        tabBarIcon: ({color}) => <Icon name="poll" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Swap"
      component={SwapScreen}
      options={{
        tabBarLabel: <Text style={{fontFamily: 'BlissPro-Bold'}}>Swap</Text>,
        //tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="swap-horizontal-bold" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: <Text style={{fontFamily: 'BlissPro-Bold'}}>Home</Text>,
        //tabBarColor: '#694fad',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Buy & Sell"
      component={BuySellScreen}
      options={{
        tabBarLabel: (
          <Text style={{fontFamily: 'BlissPro-Bold'}}>Buy & Sell</Text>
        ),
        //tabBarColor: '#d02860',
        tabBarIcon: ({color}) => <Icon name="cart" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Transfer"
      component={TransferScreen}
      options={{
        tabBarLabel: (
          <Text style={{fontFamily: 'BlissPro-Bold'}}>Transfer</Text>
        ),
        //tabBarColor: '#d02860',
        tabBarIcon: ({color}) => <Icon name="send" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomStack;
