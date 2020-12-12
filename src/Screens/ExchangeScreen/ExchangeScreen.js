import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Col, Grid} from 'native-base';

export default ({navigation}) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Exchange
        </Text>
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#330867',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 10}}>
            <Title
              style={{
                fontFamily: 'BlissPro-Bold',
                fontSize: 25,
                color: '#fff',
                textAlign: 'center',
              }}>
              Blockchain Exchange
            </Title>

            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.8,
                textAlign: 'center',
                color: '#fff',
              }}>
              There's a new way to trade. Link your Wallet for instant access.
            </Text>
          </View>
          <Grid>
            <Col
              style={{
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="database" size={40} color="#fff" />
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    textAlign: 'center',
                    color: '#fff',
                  }}>{`Access More
Cryptos`}</Text>
              </View>
            </Col>
            <Col
              style={{
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="currency-usd" size={40} color="#fff" />
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    textAlign: 'center',
                    color: '#fff',
                  }}>{`Deposit & Withdraw
Euros/Dollars`}</Text>
              </View>
            </Col>
          </Grid>
          <Grid style={{marginTop: 2}}>
            <Col
              style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="flash" size={40} color="#fff" />
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    textAlign: 'center',
                    color: '#fff',
                  }}>
                  {`Trade
Lightning fast`}
                </Text>
              </View>
            </Col>
            <Col
              style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="account-supervisor" size={40} color="#fff" />
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    textAlign: 'center',
                    color: '#fff',
                  }}>
                  {`Buit by
Blockchain.com`}
                </Text>
              </View>
            </Col>
          </Grid>
        </View>

        <View style={{margin: 20}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              // textAlign: 'center',
              color: '#2ecc72',
              opacity: 0.6,
            }}>
            Our Exchange will be able to:
          </Title>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View
              style={{
                height: 8,
                width: 8,
                backgroundColor: '#000',
                borderRadius: 100,
                alignSelf: 'flex-start',
                margin: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'BlissPro',

                opacity: 0.6,
              }}>
              Share your Gold or Silver Level status for unlimited trading
            </Text>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View
              style={{
                height: 8,
                width: 8,
                backgroundColor: '#000',
                borderRadius: 100,
                alignSelf: 'flex-start',
                margin: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'BlissPro',

                opacity: 0.6,
              }}>
              Sync addresses with your Wallet so you can securely sweep crypto
              between accounts
            </Text>
          </View>
        </View>

        <View style={{margin: 20}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              // textAlign: 'center',
              color: '#D63031',
              opacity: 0.6,
            }}>
            Will not:
          </Title>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View
              style={{
                height: 8,
                width: 8,
                backgroundColor: '#000',
                borderRadius: 100,
                alignSelf: 'flex-start',
                margin: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'BlissPro',

                opacity: 0.6,
              }}>
              Access the crypto in your wallet, access your keys, or view your
              paasword.
            </Text>
          </View>
        </View>

        <View style={{marginTop: 50}}>
          <View style={{margin: 10}}>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#1749FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#fff',
                  opacity: 0.8,
                }}>
                Connect Now
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{margin: 10}}>
            <TouchableOpacity
              style={{
                width: '100%',
                borderColor: '#1749FF',
                borderWidth: 2,
                // backgroundColor: '#1749FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#1749FF',
                  opacity: 0.8,
                }}>
                LEARN MORE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
