import React, {useState, useEffect } from 'react';
import {View, Text, Alert, TextInput, ActivityIndicator } from 'react-native';
import {Content} from 'native-base';
import Button from '../../../Components/Button';
import useAppTheme from '../../../Themes/Context';
import {connect} from 'react-redux';
import {createPayment} from '../../../Services/Api';
import ErrorMsg from '../../../Components/ErrorMsg';

const BuyScreen = ({details}) => {
  
  const {theme} = useAppTheme();
  const [state, setstate] = useState({
    toaddress: '',
    amount: '',
    fee: '',
    isErr: false,
    errMsg: '',
    isLoading: false,
    textBoxWidth: ''
  });

  const onChangePaymentHandler = () => {
    const {userPassword, id} = details?.auth?.data;
    const {toaddress, amount, fee} = state;

    if (!toaddress.trim())
      return setstate({
        ...state,
        isErr: true,
        errMsg: 'Please enter a Wallet Address',
      });
    if (!amount.trim())
      return setstate({
        ...state,
        isErr: true,
        errMsg: 'Please enter a BTC Address',
      });

    console.log('===>>', id, userPassword, toaddress, amount, fee);
    setstate({ ...state, isLoading: true })
    createPayment(id, userPassword, toaddress, amount, fee)
      .then(res => {
        if (res?.data?.data?.ack != 0) {
          setstate({...state, isLoading: false});
          Alert.alert('Message', res?.data?.data?.msg);
          return;
        }
        setstate({ ...state, isLoading: false })
        Alert.alert('Error', res?.data?.data?.msg);
      })
      .catch(err => {
        setstate({...state, isLoading: false});
        Alert.alert('Error', 'Something went wrong please try again later');
        console.log(err);
      });
  };


  useEffect(() => {
    setstate({ textBoxWidth: '100%' })
  }, [])

  return (
    <Content style={{backgroundColor: theme.colors.background}}>
      <View
        style={{padding: 15, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderBottomColor: '#eee',
            paddingVertical: 10,
            borderBottomWidth: 2,
          }}>
          <Text
            style={{
              fontFamily: 'BlissPro-Bold',
              fontSize: 16,
              marginHorizontal: 10,
            }}>
            From
          </Text>
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 16,
              opacity: 0.5,
              marginHorizontal: 10,
            }}>
            My Bitcoin Wallet
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 10,
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
          }}>
          <Text
            style={{
              fontFamily: 'BlissPro-Bold',
              fontSize: 16,
              marginHorizontal: 10,
            }}>
            To
          </Text>

          <TextInput
            onChangeText={text => setstate({...state, toaddress: text})}
            style={{width: state.textBoxWidth ? state.textBoxWidth : 0, fontFamily: 'BlissPro'}}
            placeholder="Please enter a Wallet Address"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 5,
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
          }}>
          <Text
            style={{
              fontFamily: 'BlissPro-Bold',
              fontSize: 16,
              marginHorizontal: 10,
            }}>
            BTC
          </Text>

          <TextInput
            onChangeText={text => setstate({...state, amount: text})}
            style={{width: '100%', fontFamily: 'BlissPro'}}
            placeholder="Please enter a BTC Amount"
            keyboardType="numeric"
          />
        </View>
        <View style={{width: '100%', marginTop: 20}}>
          {!state.isLoading && (
            <Button
              color="#fff"
              label="SEND"
              onPress={onChangePaymentHandler}
            />
          )}
        </View>

        {state.isErr && <ErrorMsg msg={state.errMsg} />}
        {state.isLoading && (
          <ActivityIndicator
            style={{marginTop: 20}}
            size="large"
            color="#1749FF"
          />
        )}
      </View>
    </Content>
  );
};

export default connect(
  state => ({
    details: state,
  }),
  {},
)(BuyScreen);
