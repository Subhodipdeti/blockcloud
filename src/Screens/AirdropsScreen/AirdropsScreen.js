import React from 'react';
import {View, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List, ListItem, Left, Body, Right, Text} from 'native-base';
import useAppTheme from '../../Themes/Context';

export default ({navigation}) => {
  const { theme } = useAppTheme();
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Airdrops
        </Text>
      </Appbar.Header>
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.6,
              fontSize: 18,
              color: '#000',
            }}>
            Active
          </Text>
        </View>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.6,
              fontSize: 18,
              color: '#000',
            }}>
            Ended
          </Text>
        </View>

        <List>
          <ListItem avatar noBorder>
            <Left>
              <View
                style={{
                  backgroundColor: '#FAC42F',
                  padding: 5,
                  borderRadius: 100,
                }}>
                <Icon name="bitcoin" color="#fff" size={20} />
              </View>
            </Left>
            <Body>
              <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
                XLM
              </Text>
              <Text note>Ended on 14/06/2019</Text>
            </Body>
            <Right>
              <Icon name="chevron-right" size={20} />
            </Right>
          </ListItem>

          <ListItem avatar noBorder>
            <Left>
              <View
                style={{
                  backgroundColor: '#6AB04A',
                  padding: 5,
                  borderRadius: 100,
                }}>
                <Icon name="bitcoin" color="#fff" size={20} />
              </View>
            </Left>
            <Body>
              <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
                STX
              </Text>
              <Text note>Ended on 14/06/2019</Text>
            </Body>
            <Right>
              <Icon name="chevron-right" size={20} />
            </Right>
          </ListItem>
        </List>
      </ScrollView>
    </>
  );
};
