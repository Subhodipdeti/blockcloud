import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    backgroundColor: 'rgba(23, 73, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  textColor: {
    fontFamily: 'BlissPro-Bold',
    fontSize: 22,
    opacity: 0.8,
    color: '#1749FF',
  },
});
