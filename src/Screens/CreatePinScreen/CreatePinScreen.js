import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {Title} from 'react-native-paper';
import Pin from './Pin';
import {useAppContext} from '../../Context/ctx';

const CreatePinScreen = ({navigation, token, isRenterPin}) => {
  const {colors} = useTheme();
  const [state, setstate] = useState('');

  const {signIn, toggleAppState} = useAppContext();

  const onChangePinHandler = pin => {
    setstate(pin);
    if (pin.length == 4 && token) {
      if (token == pin) {
        toggleAppState(false);
      }
    }
    if (pin.length == 4) {
      signIn(pin);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../Assets/images/logo.png')}
          style={styles.logo}
          resizeMode="center"
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Title
          style={{color: '#05375a', fontSize: 18, fontFamily: 'BlissPro-Bold'}}>
          {isRenterPin ? 'Re Enter PIN' : 'Enter PIN'}
        </Title>
        <Pin
          placeholder={
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                opacity: 0.3,
                backgroundColor: '#05375a',
              }}
            />
          }
          mask={
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                backgroundColor: '#05375a',
              }}
            />
          }
          autoFocus={true}
          maskDelay={1000}
          password={true}
          cellStyle={null}
          cellStyleFocused={null}
          value={state}
          onTextChange={code => onChangePinHandler(code)}
        />
      </View>
    </View>
  );
};

export default CreatePinScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    // flex: 1,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingVertical: 10,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
