import React, {useState, useEffect} from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import {Appbar} from 'react-native-paper';
import {getStatements} from '../../Services/Api';
import moment from 'moment';
import {
  List,
  ListItem,
  Body,
  Right,
  Text,
} from 'native-base';
import {View} from 'react-native-animatable';

const MyComponent = ({navigation}) => {
  const [stateMent, setstateMent] = useState(null);
  const [error, seterror] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getStatements(7)
      .then(res => {
          setisLoading(false)
        if (res?.data?.data?.ack != 1) {
          seterror(true);
          return;
        }
        setstateMent(res?.data?.data?.data);
        //console.log('===>>>>', res?.data?.data?.data);
      })
      .catch(err => {
        setisLoading(false)
        console.log(err)
      });
  }, []);

  return (
    <>
      <Appbar.Header style={{backgroundColor: '#192A56'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text
          style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
          Statement
        </Text>
      </Appbar.Header>
      {
          !stateMent && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{ fontFamily: 'BlissPro-Bold', fontSize: 20}}>You have no Statements</Text>
          </View>
      }
      {
          isLoading ? <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} size="large" color="#192A56" /> : (<ScrollView style={{flex: 1}}>
            {stateMent &&
              stateMent?.map((statment, i) => {
                return (
                  <List key={i} style={{width: '100%',}}>
                    <ListItem>
                      <Body>
                        <Text style={{ fontFamily: 'BlissPro'}}>{`Amount: ${statment?.amounts}`}</Text>
                        <Text style={{ fontFamily: 'BlissPro'}} note>{`To: ${statment?.merchantto}`}</Text>
                      </Body>
                      <Right>
                        <Text style={{ fontFamily: 'BlissPro'}} note>
                          {moment(statment?.createdDate.slice(0, 10)).format(
                            'DD MMM',
                          )}
                        </Text>
                      </Right>
                    </ListItem>
                  </List>
                );
              })}
          </ScrollView>)
      }
    
    </>
  );
};

export default MyComponent;
