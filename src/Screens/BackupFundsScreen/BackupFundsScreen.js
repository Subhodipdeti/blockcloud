import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import {Text} from 'native-base';
import Button from '../../Components/Button';
import useAppTheme from '../../Themes/Context';

export default ({navigation}) => {
  const { theme } = useAppTheme();
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Backup Funds
        </Text>
      </Appbar.Header>
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
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
          <Button label="Start Backup" />
        </View>
      </ScrollView>
    </>
  );
};
