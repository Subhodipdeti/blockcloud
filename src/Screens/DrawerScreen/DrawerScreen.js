import React from 'react';
import {View, StyleSheet, Alert, Image, Linking} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppContext} from '../../Context/ctx';

export function DrawerScreen(props) {
  const paperTheme = useTheme();

  const {signOut} = useAppContext();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View> */}

          <Drawer.Section
            style={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'center',
              alignSelf: 'flex-start',
              borderBottomColor: '#eee',
              borderBottomWidth: 2,
              width: '100%',
            }}>
            <Image
              source={require('../../Assets/images/logo-slidebar.png')}
              height={null}
              width={null}
              resizeMode="center"
            />
            {/* <Icon
              name="bitcoin"
              size={30}
              color="#1749FF"
              style={{alignSelf: 'center', margin: 5}}
            /> */}
            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
              <Title style={{fontFamily: 'BlissPro-Bold'}}>Blockcloud</Title>
              <Title style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
                .com
              </Title>
            </View>
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="brightness-percent" color={color} size={size} />
              )}
              label="Earn interest"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('EarnIntrestScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="format-list-numbered" color={color} size={size} />
              )}
              label="Backup funds"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('BackupFundsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wallet" color={color} size={size} />
              )}
              label="Address"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('AddressesScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="rotate-left" color={color} size={size} />
              )}
              label="Exchange"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('ExchangeScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="airballoon" color={color} size={size} />
              )}
              label="Airdrops"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('AirdropsScreen');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="lock" color={color} size={size} />
              )}
              label="Lockbox"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('LockboxScreen');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="file-multiple" color={color} size={size} />
              )}
              label="Statement"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('StatementsScreen');
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="earth" color={color} size={size} />
              )}
              label="Login in to Web Wallet"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('LitWalletScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Settings"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Support"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                Alert.alert(
                  'Blockchain',
                  'This will leave the app and take you to browser. Continue?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () =>
                        Linking.openURL('https://www.blockchain.com/'),
                    },
                  ],
                  {cancelable: false},
                );
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="exit-to-app" color={color} size={size} />
              )}
              label="Logout"
              labelStyle={{
                fontFamily: 'BlissPro',
                fontSize: 17,
                fontWeight: '600',
              }}
              onPress={() => {
                Alert.alert(
                  'Blockchain',
                  'This will leave the app and take you to browser. Continue?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => signOut(),
                    },
                  ],
                  {cancelable: false},
                );
              }}
            />
          </Drawer.Section>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section> */}
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
