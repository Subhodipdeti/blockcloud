import React from 'react';
import BottomStack from '../MainStack/BottomStack';
import {DrawerScreen} from '../../Screens/DrawerScreen/DrawerScreen';
import EarnIntrestScreen from '../../Screens/EarnInterestScreen/EarnInterestScreen';
import BackupFundsScreen from '../../Screens/BackupFundsScreen/BackupFundsScreen';
import AddressesScreen from '../../Screens/AddressScreen/AddressScreen';
import ExchangeScreen from '../../Screens/ExchangeScreen/ExchangeScreen';
import AirdropsScreen from '../../Screens/AirdropsScreen/AirdropsScreen';
import LockboxScreen from '../../Screens/LocboxScreen/LocboxScreen';
import SettingsScreen from '../../Screens/SettingsScreen/SettingsScreen';
import LitWalletScreen from '../../Screens/LtwScreen/LtwScreen';
import Camera from '../../Screens/CameraScreen/CameraScreen';
import StatementsScreen from '../../Screens/StatementsScreen/StatementsScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default () => (
  <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />}>
    <Drawer.Screen name="HomeDrawer" component={BottomStack} />
    <Drawer.Screen name="EarnIntrestScreen" component={EarnIntrestScreen} />
    <Drawer.Screen name="BackupFundsScreen" component={BackupFundsScreen} />
    <Drawer.Screen name="AddressesScreen" component={AddressesScreen} />
    <Drawer.Screen name="ExchangeScreen" component={ExchangeScreen} />
    <Drawer.Screen name="AirdropsScreen" component={AirdropsScreen} />
    <Drawer.Screen name="LockboxScreen" component={LockboxScreen} />
    <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    <Drawer.Screen name="LitWalletScreen" component={LitWalletScreen} />
    <Drawer.Screen name="StatementsScreen" component={StatementsScreen} />
    <Drawer.Screen name="Camera" component={Camera} />
  </Drawer.Navigator>
);
