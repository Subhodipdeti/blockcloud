import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Title, List as PaperList} from 'react-native-paper';
import {Text, Switch} from 'native-base';
import useAppTheme from '../../Themes/Context';

export default ({navigation}) => {
  const { theme } = useAppTheme();
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Settings
        </Text>
      </Appbar.Header>
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.6,
              color: '#4834DF',
            }}>
            Profile
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                //opacity: 0.6,
              }}>
              Swap Limit
            </Title>
            <Text>Locked</Text>
          </View>

          <View style={{marginTop: 10}}>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                //opacity: 0.6,
              }}>
              Wallet ID
            </Title>
            <Text
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                opacity: 0.5,
              }}>
              3c9984d0-dbf1-4124-93b9-041fc8f4cb14
            </Text>
          </View>

          <View style={{marginTop: 15}}>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                //opacity: 0.6,
              }}>
              Your Email
            </Title>
            <Text
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                opacity: 0.5,
              }}>
              abc123@gmail.com
            </Text>
          </View>

          <View style={{marginTop: 15}}>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                //opacity: 0.6,
              }}>
              Mobile
            </Title>
            <Text
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                opacity: 0.5,
              }}>
              not specified
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                //opacity: 0.6,
              }}>
              Exchange
            </Title>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: '#3498DB',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  fontSize: 18,
                  opacity: 0.5,
                  color: '#fff',
                }}>
                Connect
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 20,
              width: '98%',
              borderBottomColor: '#eee',
              borderBottomWidth: 2,
            }}
          />
        </View>

        <View style={{margin: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.6,
              color: '#4834DF',
            }}>
            Preferences
          </Text>
        </View>

        <View style={{margin: 10}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              //opacity: 0.6,
            }}>
            Local Currency
          </Title>
          <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>CBP</Text>

          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                //opacity: 0.6,
              }}>
              Push Notifications
            </Title>
            <Switch value={true} />
          </View>
        </View>

        <View style={{margin: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.6,
              color: '#4834DF',
            }}>
            Security
          </Text>
        </View>

        <View style={{margin: 10}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              //opacity: 0.6,
            }}>
            Change PIN
          </Title>
        </View>

        <View style={{margin: 10}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              //opacity: 0.6,
            }}>
            Change password
          </Title>
        </View>

        <PaperList.Item
          title="2-step Verification"
          description="protect your wallet from unauthorized access by enabling 2-step Verification"
          right={props => <Switch value={false} />}
        />

        <PaperList.Item
          title="Enable Screenshots"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          right={props => <Switch value={false} />}
        />

        <PaperList.Item
          title="Block Tor Reqests"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          right={props => <Switch value={false} />}
        />

        <PaperList.Item
          title="Launcher Shortcuts"
          description="protect your wallet from unauthorized access by enabling 2-step Verification"
          right={props => <Switch value={true} />}
        />

        <PaperList.Item
          title="Swipe to recive"
          description="protect your wallet from unauthorized access by enabling 2-step Verification"
          right={props => <Switch value={true} />}
        />

        <PaperList.Item
          title="Enable Cloud Backups"
          description="protect your wallet from unauthorized access by enabling 2-step Verification"
          right={props => <Switch value={true} />}
        />

        <View
          style={{
            marginTop: 20,
            width: '98%',
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
          }}
        />

        <View style={{margin: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.6,
              color: '#4834DF',
            }}>
            App
          </Text>
        </View>

        <View style={{margin: 10}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.8,
            }}>
            About Us
          </Title>
          <Text
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.5,
            }}>
            v8.1.2(590)
          </Text>
        </View>

        <View style={{margin: 10}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.8,
            }}>
            Terms of Service
          </Title>
        </View>

        <View style={{margin: 10}}>
          <Title
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.8,
            }}>
            Privacy Policy
          </Title>
        </View>
      </ScrollView>
    </>
  );
};
