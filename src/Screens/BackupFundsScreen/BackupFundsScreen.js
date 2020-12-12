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
          Backup Funds
        </Text>
      </Appbar.Header>
      <ScrollView>
        <View style={{margin: 20}}>
          <Title style={{fontFamily: 'BlissPro', fontSize: 25}}>
            Backup Phrase
          </Title>
        </View>
        <View style={{margin: 20}}>
          <Text style={{fontFamily: 'BlissPro', opacity: 0.6}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </Text>
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
              Start Backup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
