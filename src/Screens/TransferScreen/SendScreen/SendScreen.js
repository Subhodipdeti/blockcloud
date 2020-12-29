import React, { useState } from 'react';
import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';
import { TextInput, Searchbar, Avatar } from 'react-native-paper';
import Button from '../../../Components/Button';
import useAppTheme from '../../../Themes/Context';
import { connect } from 'react-redux';
import { createPayment, getUser } from '../../../Services/Api';

const filteredDataSource = [
    { id: 1, email: 'subhodipdeti14141@gmail.com' },
    { id: 2, email: 'jane@gmail.com' },
    { id: 3, email: 'shakti@gmail.com' },
    { id: 4, email: 'debu@gmail.com' },
    { id: 5, email: 'arijit@gmail.com' }
]

const BuyScreen = ({ details }) => {
    const [userList, setuserList] = useState([]);
    const [selectedUser, setselectedUser] = useState(null);
    const [search, setsearch] = useState('');

    const [loading, setloading] = useState(false);
    // console.log('====>>> from Transfer', details?.auth?.data)
    const { theme } = useAppTheme();
    const [state, setstate] = useState({ toaddress: '', amount: '', fee: '' });

    const onChangePaymentHandler = () => {
        const { userPassword, id } = details?.auth?.data;
        const { amount, fee } = state;

        console.log('===>>', id, userPassword, selectedUser?.id, amount, fee);
        createPayment(id, userPassword, selectedUser?.id, amount, fee)
            .then(res => {
                if (res?.data?.data?.ack != 0) {
                    Alert.alert('Message', res?.data?.data?.msg);
                    return;
                }
                Alert.alert('Error', res?.data?.data?.msg);
            })
            .catch(err => {
                Alert.alert('Error', 'Something went wrong please try again later')
                console.log(err)
            })
    }

    const searchFilterFunction = text => {
        setsearch(text);
        if (text) {
            getUser(text)
                .then(res => {
                    console.log('===>>', res?.data?.data?.list)
                    const newData = res?.data?.data?.list?.filter(function (item) {
                        // Applying filter for the inserted text in search bar
                        const itemData = item.email
                            ? item.email.toUpperCase()
                            : ''.toUpperCase();
                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    });
                    setuserList(newData);
                    setsearch(text);
                })
        }

    }


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

    const ItemView = ({ item }) => {
        const onChangeUserHandle = user => {
            setsearch(null)
            setuserList(null);
            setselectedUser(user)
            console.log(user)
        }
        return (
            <TouchableOpacity onPress={() => onChangeUserHandle(item)} style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 10 }}>
                <Avatar.Text size={24} label={item?.email?.slice(0, 1).toUpperCase()} />
                <Text style={{ fontFamily: 'BlissPro', marginLeft: 10 }}>{item?.email[0].toUpperCase() + item?.email?.slice(1)}</Text>
            </TouchableOpacity>

        );
    };

    return (
        <Content style={{ backgroundColor: theme.colors.background }}>
            <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                {/* <TextInput
                    style={{ width: '100%' }}
                    label="User Id"
                    value={state.toaddress}
                    onChangeText={text => setstate({ ...state, toaddress: text })}
                /> */}
                <Searchbar
                    placeholder="Search"
                    onChangeText={searchFilterFunction}
                    value={search}
                />

                <FlatList
                    style={{ width: '100%' }}
                    data={userList}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />

                {
                    selectedUser && <View style={{ marginTop: 20, alignSelf: 'flex-start' }}>
                        <View style={{ backgroundColor: '#eee', borderRadius: 20, padding: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Avatar.Text size={24} label={selectedUser?.email?.slice(0, 1).toUpperCase()} />
                            <Text style={{ fontFamily: 'BlissPro', marginLeft: 10 }}>{selectedUser?.email[0].toUpperCase() + selectedUser?.email?.slice(1)}</Text>
                        </View>
                    </View>
                }

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>

                    <TextInput
                        style={{ width: '50%', marginHorizontal: 10 }}
                        label="Amount"
                        value={state.amount}
                        keyboardType="numeric"
                        onChangeText={text => setstate({ ...state, amount: text })}
                    />

                    <TextInput
                        style={{ width: '45%', marginHorizontal: 10 }}
                        label="Fee"
                        value={state.fee}
                        keyboardType="numeric"
                        onChangeText={text => setstate({ ...state, fee: text })}
                    />

                </View>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Button label="SEND" onPress={onChangePaymentHandler} />
                </View>
            </View>
            {/* <View
          style={{padding: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Title>No crypto to send</Title>
          <Text
            style={{
              fontFamily: 'BlissPro',
              opacity: 1,
              textAlign: 'center',
            }}>
            Looks ike your wallets are empty, we can help you buy crypto
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: height / 3.5,
          }}>
          <View
            style={{
              borderColor: 'rgba(23, 73, 255, 0.5)',
              borderWidth: 5,
              backgroundColor: 'rgba(23, 73, 255, 1)',
              height: 100,
              width: 100,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type={ICON_TYPE.MATERIAL_COMMUNITY}
              name="bitcoin"
              size={50}
              color="#fff"
              style={{transform: [{rotate: '50deg'}]}}
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <Button label="Buy Crypto" />
        </View> */}
        </Content>
    );
};




export default connect(
    state => ({
        details: state,
    }), {
}
)(BuyScreen);
