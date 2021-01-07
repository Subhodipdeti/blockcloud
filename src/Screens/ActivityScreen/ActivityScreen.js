import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Left, Body, Right, Text } from 'native-base';
import { Icon, ICON_TYPE } from '../../Assets/icons';
import Header from '../../Components/Header';
import useAppTheme from '../../Themes/Context';
import styles from './styles';

function ActivityScreen({ navigation }) {
  const { theme } = useAppTheme();
  return (
    <>
      <Header navigation={navigation} title="Activity" screenName="Activity" />
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={styles.topOuterCard}>
          <List style={styles.list}>
            <ListItem avatar noBorder>
              <Left>
                <View style={styles.listLeftView}>
                  <Icon
                    type={ICON_TYPE.MATERIAL_COMMUNITY}
                    name="wallet"
                    color="#1749FF"
                    size={20}
                  />
                </View>
              </Left>
              <Body>
                <Text style={styles.commonText}>My Bitcoin Wallet</Text>
                <Text note style={styles.commonText}>
                  $0.00 GBP
                </Text>
              </Body>
              <Right>
                <View style={styles.listRightView}>
                  <Icon
                    type={ICON_TYPE.MATERIAL_COMMUNITY}
                    name="chevron-down"
                    size={20}
                    color="#fff"
                  />
                </View>
              </Right>
            </ListItem>
          </List>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.noActivityText}>You Have No Activity</Text>
          <Text style={styles.transactionsText}>
            All your transactions will show up here.
          </Text>

          <View style={styles.iconContainer}>
            <Icon
              type={ICON_TYPE.MATERIAL_COMMUNITY}
              name="bitcoin"
              size={50}
              color="#fff"
              style={{ transform: [{ rotate: '50deg' }] }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default ActivityScreen;
