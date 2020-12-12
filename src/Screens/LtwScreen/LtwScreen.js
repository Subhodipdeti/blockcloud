import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import {Text} from 'native-base';

export default ({navigation}) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Log in to Web Wallet
        </Text>
      </Appbar.Header>
      <ScrollView>
        <View style={{margin: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'BlissPro-Bold',
                fontSize: 18,
                color: '#1749FF',
                margin: 5,
              }}>
              1
            </Title>
            <Text
              style={{marginLeft: 10, fontFamily: 'BlissPro', opacity: 0.6}}>
              Go to login.blockchain.com on your computer.
            </Text>
          </View>

          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'BlissPro-Bold',
                fontSize: 18,
                color: '#1749FF',
                margin: 5,
              }}>
              2
            </Title>
            <Text
              style={{
                marginLeft: 10,
                flex: 5,
                fontFamily: 'BlissPro',
                opacity: 0.6,
              }}>
              Select Log in via mobile.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'BlissPro-Bold',
                fontSize: 18,
                color: '#1749FF',
                margin: 5,
              }}>
              3
            </Title>
            <Text
              style={{marginLeft: 10, fontFamily: 'BlissPro', opacity: 0.6}}>
              Using your computer's camera, scan the QR code below.
            </Text>
          </View>
        </View>

        <View style={{margin: 10}}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: 'rgba(23, 73, 255, 1)',
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
              Show QR code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
