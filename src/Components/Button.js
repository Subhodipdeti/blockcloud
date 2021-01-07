import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import useAppTheme from '../Themes/Context';

export default ({label, color, style, mode, zeroMargin, onPress, loading}) => {
  const { theme } = useAppTheme();
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: theme.colors.primary }]} onPress={onPress}>
      <Text style={[styles.textColor, { color: color ? color : theme.colors.text }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textColor: {
    fontFamily: 'BlissPro-Bold',
    opacity: 1,
  },
});
