import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {Icon, ICON_TYPE} from '../Assets/icons/index';
import useAppTheme from '../../src/Themes/Context';

export default ({navigation, title, screenName}) => {
  const { theme } = useAppTheme();

  return (
    (
      <View style={[styles.container, { backgroundColor: theme.colors.header }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
              name="menu"
              type={ICON_TYPE.MATERIAL_COMMUNITY}
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
          <Title style={styles.headerLeftTitle}>{title}</Title>
        </View>
    
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera', {screenName: screenName})}>
          <Icon
            type={ICON_TYPE.MATERIAL_COMMUNITY}
            name="qrcode-scan"
            size={25}
            color="#fff"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  headerLeft: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTitle: {
    color: '#fff',
    fontFamily: 'BlissPro-Bold',
    marginLeft: 20,
  },
});
