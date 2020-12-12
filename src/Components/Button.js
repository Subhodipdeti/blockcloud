import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default ({label, color, style, mode, zeroMargin, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textColor}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1749FF',
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
    color: '#fff',
    opacity: 1,
  },
});
