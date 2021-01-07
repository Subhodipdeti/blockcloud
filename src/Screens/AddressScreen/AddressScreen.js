import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List, ListItem, Left, Body, Right, Text} from 'native-base';
import useAppTheme from '../../Themes/Context';
import styles from './styles';

export default ({navigation}) => {
  const { theme } = useAppTheme();
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={styles.addressesText}>
          Addresses
        </Text>
      </Appbar.Header>
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <List style={styles.list}>
          <ListItem avatar noBorder>
            <Left>
              <View
                style={styles.listViewList}>
                <Icon name="bitcoin" color="#1749FF" size={20} />
              </View>
            </Left>
            <Body>
              <Text
                style={styles.bitcoinText}>
                BITCOIN
              </Text>
            </Body>
            <Right>
              <View
                style={styles.rightText}>
                <Icon name="chevron-down" size={20} color="#fff" />
              </View>
            </Right>
          </ListItem>
        </List>

        <View
          style={styles.walletOuterArea}>
          <View>
            <Text
              style={styles.wlletText}>
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
          style={styles.outerArea}>
          <View>
            <Text
              style={styles.myBitcoinText}>
              My Bitcoin Wallet
            </Text>
          </View>
          <View>
            <Text
              style={styles.btcText}>
              Default 0 BTC
            </Text>
          </View>
        </View>

        <View
          style={styles.addressArea}>
          <View>
            <Text
              style={styles.addressText}>
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
