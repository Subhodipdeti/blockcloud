import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Content, Card, Text} from 'native-base';

export default ({navigation}) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Lockbox
        </Text>
      </Appbar.Header>
      <ScrollView>
        <Content>
          <Card>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  fontSize: 18,
                  fontWeight: '900',
                  color: '#30336B',
                }}>
                Get Your Lockbox
              </Text>

              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'BlissPro',
                  fontSize: 18,
                  fontWeight: '900',
                  opacity: 0.6,
                }}>
                Safely store your cryptocurrency offline.
              </Text>
            </View>
            <Icon
              name="lock"
              size={100}
              color="#30336B"
              style={{alignSelf: 'center'}}
            />
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
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </Content>
      </ScrollView>
    </>
  );
};
