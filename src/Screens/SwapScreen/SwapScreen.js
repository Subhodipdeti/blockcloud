import React from 'react';
import {View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List, ListItem, Left, Body, Right, Text} from 'native-base';
import Badge from '../../Components/Badge';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import useAppTheme from '../../Themes/Context';

const DetailsScreen = ({navigation}) => {
  const { theme } = useAppTheme();
  const listData = [
    {
      id: 1,
      title: 'Select Your Country',
      desc: 'Doing what you like will always keep you happy . .',
    },
    {
      id: 2,
      title: 'Verify Your identity',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: ' Start Swapping',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  return (
    <>
      <Header navigation={navigation} title="Swap" screenName="Swap" />
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <View
          style={{
            padding: 10,
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
          }}>
          <View>
            {/* <Icon name="arrow-left" color="#000" size={20} /> */}
            <Icon name="cart" size={30} color="#1749FF" />
          </View>
          <Text style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 1}}>
            Verify Your id, Swap Today
          </Text>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.8}}>
              Verify your identity to Swap crypto at Anytime Apply and Swap in
              minutes.
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
                    <Text note style={{fontFamily: 'BlissPro', opacity: 0.9}}>
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
    </>
  );
};

export default DetailsScreen;
