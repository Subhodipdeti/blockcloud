import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme, Appbar } from 'react-native-paper';
import ErrorMsg from '../../Components/ErrorMsg';
import { EMAIL_REGEXP } from '../../Utils/Helper';
import { createUser } from '../../Services/Api';
import { setUserDetails } from '../../Services/AsyncStorage';
import { signIn } from '../../Store/Actions/authActions';
import { connect } from 'react-redux';

const SignUpScreen = ({ navigation, signIn }) => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: false,
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
    setData({ ...data, isErr: false, errMsg: '' })

    const { name, email, password, confirmPassword } = data;
    if (!name.trim()) return setData({ ...data, isErr: true, errMsg: 'Please enter your name' });
    if (!email.trim()) return setData({ ...data, isErr: true, errMsg: 'Please enter your email' });
    if (!EMAIL_REGEXP.test(email.trim())) return setData({ ...data, isErr: true, errMsg: 'Please enter a valid email' });
    if (!password.trim()) return setData({ ...data, isErr: true, errMsg: 'Please enter password' });
    if (!confirmPassword.trim()) return setData({ ...data, isErr: true, errMsg: 'Please enter confirm password' });
    if (password.trim() != confirmPassword.trim()) return setData({ ...data, isErr: true, errMsg: "Password doesn't match" });


    setData({ ...data, isLoading: true });
    createUser({ name, email, password })
      .then(res => {
        if (res?.data?.data?.ack != 0) {
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

    // if (data.username.length == 0 || data.password.length == 0) {
    //   Alert.alert(
    //     'Wrong Input!',
    //     'Username or password field cannot be empty.',
    //     [{text: 'Okay'}],
    //   );
    //   return;
    // }
    // navigation.navigate('CreatePinScreen');

  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#02295F' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Create an Account" />

      </Appbar.Header>
      <ScrollView>
        <View style={styles.container}>
          <View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={[styles.action, { marginBottom: 15 }]}>

              <TextInput
                value={data.name}
                placeholder="Enter your name"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setData({ ...data, name: val })}
              />

            </View>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>

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

              />

            </View>


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

            <Text
              style={[
                styles.text_footer,
                {
                  color: colors.text,
                  marginTop: 35,
                },
              ]}>
              Confirm Password
            </Text>
            <View style={styles.action}>

              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setData({ ...data, confirmPassword: val })}
              />
            </View>


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
                    SIGN UP
                </Text>
                </TouchableOpacity>
              </View>)
            }

            {data.isErr && <ErrorMsg msg={data.errMsg} />}
            {data.isLoading && <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#1749FF" />}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default connect(
  state => ({
    details: state,
  }), {
  signIn
}
)(SignUpScreen);

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
    //color: '#05375a',
    fontSize: 18,
    fontFamily: 'BlissPro-Bold',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#d4d4d4',
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
