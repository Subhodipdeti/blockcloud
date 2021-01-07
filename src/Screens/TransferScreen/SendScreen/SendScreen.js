import React, {useState} from 'react';
import {View, Text, Alert, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import {Content} from 'native-base';
import {Searchbar, Avatar} from 'react-native-paper';
import Button from '../../../Components/Button';
import useAppTheme from '../../../Themes/Context';
import {connect} from 'react-redux';
import {createPayment, getUser} from '../../../Services/Api';
import ErrorMsg from '../../../Components/ErrorMsg';

const filteredDataSource = [
  {id: 1, email: 'subhodipdeti14141@gmail.com'},
  {id: 2, email: 'jane@gmail.com'},
  {id: 3, email: 'shakti@gmail.com'},
  {id: 4, email: 'debu@gmail.com'},
  {id: 5, email: 'arijit@gmail.com'},
];

const BuyScreen = ({details}) => {
  const [userList, setuserList] = useState([]);
  const [selectedUser, setselectedUser] = useState(null);
  const [search, setsearch] = useState('');

  const [loading, setloading] = useState(false);
  // console.log('====>>> from Transfer', details?.auth?.data)
  const {theme} = useAppTheme();
  const [state, setstate] = useState({
    toaddress: '',
    amount: '',
    fee: '',
    isErr: false,
    errMsg: '',
    isLoading: false,
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

  const searchFilterFunction = text => {
    setsearch(text);
    if (text) {
      getUser(text).then(res => {
        console.log('===>>', res?.data?.data?.list);
        const newData = res?.data?.data?.list?.filter(function(item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.email
            ? item.email.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setuserList(newData);
        setsearch(text);
      });
    }
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const ItemView = ({item}) => {
    const onChangeUserHandle = user => {
      setsearch(null);
      setuserList(null);
      setselectedUser(user);
      console.log(user);
    };
    return (
      <TouchableOpacity
        onPress={() => onChangeUserHandle(item)}
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}>
        <Avatar.Text size={24} label={item?.email?.slice(0, 1).toUpperCase()} />
        <Text style={{fontFamily: 'BlissPro', marginLeft: 10}}>
          {item?.email[0].toUpperCase() + item?.email?.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  };

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
            style={{width: '100%', fontFamily: 'BlissPro'}}
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
