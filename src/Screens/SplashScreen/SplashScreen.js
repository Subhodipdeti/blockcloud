import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import {Title} from 'react-native-paper';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Title
            style={{
              fontFamily: 'BlissPro-Bold',
              // color: '#fff',
              // opacity: 0.8,
            }}>
            Welcome to Blockchain
          </Title>
          <View style={{padding: 10, paddingHorizontal: 20}}>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',
                textAlign: 'center',
                //fontWeight: 'bold',
                fontSize: 16,
                // color: '#fff',
                opacity: 0.6,
              }}>
              The easy way tos send, receive, store and trade digital
              currencies.
            </Text>
          </View>
        </View>
      </View>

      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}
              style={{
                width: '100%',
                backgroundColor: '#00AAE1',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                padding: 14,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,
              }}>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#fff',
                  // opacity: 0.8,
                }}>
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
              style={{
                width: '100%',
                //borderColor: '#1749FF',
                // borderWidth: 2,
                backgroundColor: '#02295F',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                padding: 14,
                elevation: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#fff',
                  // opacity: 0.8,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

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
