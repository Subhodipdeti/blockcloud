import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme, Appbar } from 'react-native-paper';
import { EMAIL_REGEXP } from '../../Utils/Helper';
import { loginUser } from '../../Services/Api';
import ErrorMsg from '../../Components/ErrorMsg';
import { signIn } from '../../Store/Actions/authActions';
import { connect } from 'react-redux';
import { setUserDetails } from '../../Services/AsyncStorage';

// import {AuthContext} from '../components/context';

// import Users from '../model/users';

const SignInScreen = ({ navigation,  details, signIn}) => {
  console.log('====>>>**', details?.auth?.data)
  const [data, setData] = React.useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isErr: false,
    errMsg: '',
    isLoading: false,
  });

  const { colors } = useTheme();

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };



  const loginHandle = () => {
    Keyboard.dismiss()
    setData({ ...data, isErr: false, errMsg: '' })
    const { email, password } = data;
    if (!email.trim()) return setData({ ...data, isErr: true, errMsg: 'Please enter your email' });
    if (!EMAIL_REGEXP.test(email.trim())) return setData({ ...data, isErr: true, errMsg: 'Please enter a valid email' });
    if (!password.trim()) return setData({ ...data, isErr: true, errMsg: 'Please enter password' });

    setData({ ...data, isLoading: true })
    loginUser({ email, password })
      .then(res => {
        if (res?.data?.data?.ack != 0) {
          // console.log('==...', res?.data)
          const userData = {
            ...res?.data?.data?.details,
            userPassword: password
          }
          setUserDetails(userData);
          signIn(userData);
          setData({ ...data, isLoading: false, isErr: false, errMsg: '' })
          navigation.navigate('CreatePinScreen');
          return;
        }
        setData({ ...data, isErr: true, isLoading: false, errMsg: res?.data?.data?.msg })
      })
      .catch(err => {
        setData({ ...data, isErr: false, isLoading: false, errMsg: '' })
        Alert.alert('Error', 'Something went wrong')
      })
    // navigation.navigate('CreatePinScreen');
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#02295F' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Sign In" />
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
      <View style={styles.container}>
        <View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => setData({ ...data, email: val })}
            // onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            {/* <Feather name="lock" color={colors.text} size={20} /> */}
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => setData({ ...data, password: val })}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <TouchableOpacity>
            <Text style={{ color: '#02295F', marginTop: 15 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {
            !data.isLoading && (<View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={loginHandle}
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
                  SIGN IN
              </Text>
              </TouchableOpacity>
            </View>)
          }

          {data.isErr && <ErrorMsg msg={data.errMsg} />}
          {data.isLoading && <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#1749FF" />}
        </View>
      </View>
    </>
  );
};


export default connect(
  state => ({
    details: state,
  }), {
  signIn
}
)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    // backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    // color: '#05375a',
    fontSize: 18,
    fontFamily: 'BlissPro-Bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    // fontFamily: 'Roboto',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
