import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {TextInput, Title} from 'react-native-paper';
import {ProgressCircle, StackedAreaChart} from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as shape from 'd3-shape';
import RBSheet from 'react-native-raw-bottom-sheet';
import {LineChart} from 'react-native-chart-kit';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListView from './ListView';
import styles from './styles';
import {StackedAreaChartData} from '../../Models/index';
import Header from '../../Components/Header';
import {connect} from 'react-redux';
import {signIn} from '../../Store/Actions/authActions';
import useAppTheme from '../../Themes/Context';
import {getUserDetails, getWalletVerified} from '../../Services/AsyncStorage';
import {
  getWalletBalance,
  getChartData,
  getCurrentBtcPrice,
} from '../../Services/Api';
import moment from 'moment';

const Tab = createMaterialTopTabNavigator();

import Animated from 'react-native-reanimated';

function MyTabBar({state, descriptors, navigation, position, onChangeTab}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          console.log('===>>####', route?.name);
          onChangeTab(route?.name);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderBottomColor: isFocused ? '#000' : '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 2,
            }}>
            <Animated.Text style={{opacity: 1}}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs({onChangeTab}) {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} onChangeTab={onChangeTab} />}>
      <Tab.Screen name="1D" component={ListView} />
      <Tab.Screen name="1W" component={ListView} />
      <Tab.Screen name="1M" component={ListView} />
      <Tab.Screen name="1Y" component={ListView} />
      <Tab.Screen name="All" component={ListView} />
    </Tab.Navigator>
  );
}

const {height, width} = Dimensions.get('screen');

const LineChartpreview = () => {
  const colors = ['#1749FF', '#4834DF', '#30336B', '#3C40C6'];
  const keys = ['apples', 'bananas', 'cherries', 'dates'];
  const svgs = [
    {onPress: () => console.log('apples')},
    {onPress: () => console.log('bananas')},
    {onPress: () => console.log('cherries')},
    {onPress: () => console.log('dates')},
  ];

  return (
    <StackedAreaChart
      style={{height: 30}}
      data={StackedAreaChartData}
      keys={keys}
      colors={colors}
      curve={shape.curveNatural}
      showGrid={false}
      svgs={svgs}
    />
  );
};

const CircleChart = btcData => {
  return (
    <ProgressCircle
      style={{height: 100}}
      progress={btcData ? btcData : 0}
      progressColor={'rgba(23, 73, 255, 1)'}
    />
  );
};

function PriceCard(usdRate) {
  const cards = [1, 2, 3];
  return cards.map((item, index) => {
    return (
      <View style={styles.priceContainer} key={index}>
        <View style={styles.priceOuterCard}>
          <View style={styles.priceBadgeIcon}>
            <Title style={{color: '#fff'}}>$</Title>
          </View>
          <View>
            <Title style={styles.priceCardTitle}>US Dollars</Title>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',
                opacity: 0.5,
              }}>
              USD
            </Text>
          </View>
          <View>
            <Title
              style={{
                fontFamily: 'BlissPro',
                fontSize: 18,
                opacity: 0.5,
              }}
            />
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.5,
              }}>
              {`US $${usdRate}`}
            </Text>
          </View>
        </View>
      </View>
    );
  });
}

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usdRate: '',
      isLoading: true,
      isVerified: false,
      toataBalance: '',
      currentBitcoinPrice: '',
      btcData: '',
      LineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [Math.random() * 100, Math.random() * 100],
            color: (opacity = 5) => `rgba(255,69,0, 8)`, // optional
            strokeWidth: 2, // optional
          },
        ],
      },
    };
  }

  ChartCard = () => {
    const cards = [1, 2];
    return cards.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.chartContainer}
          onPress={() => this.refRBSheet.open()}>
          <View style={styles.chartOuterCard}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={[
                  styles.chartInnerCard,
                  {backgroundColor: index == 1 ? '#FAC42F' : '#45CE30'},
                ]}>
                <Icon name="bitcoin" color="#fff" size={20} />
              </View>
              <Title
                style={{
                  fontFamily: 'BlissPro-Bold',
                  opacity: 1,
                }}>
                Bitcoin
              </Title>
            </View>

            <View style={{width: '30%'}}>{LineChartpreview()}</View>
          </View>

          <View style={styles.chartPriceArea}>
            <View>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.8,
                }}>
                {/* $0.00 */}
              </Text>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                {`${this.state.btcData} BTC`}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#eee',
                  width: 2,
                  marginHorizontal: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                    opacity: 0.6,
                  }}>
                  {`$ ${this.state.currentBitcoinPrice}`}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: '#D63031',
                      fontFamily: 'BlissPro',
                      opacity: 0.6,
                    }}>
                    -1.55%{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'BlissPro',
                      opacity: 0.6,
                    }}>
                    24hrs
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  fetchWalletBalance = async (id, userPassword) => {
    getWalletBalance(id, userPassword)
      .then(res => {
        if (res?.data?.data?.ack != 0) {
          const {data, btc, usdRate} = res?.data?.data;
          this.setState({
            isLoading: false,
            toataBalance: data,
            btcData: btc,
            usdRate: usdRate,
            isVerified: true,
          });
        }
      })
      .catch(err => {
        this.setState({isLoading: false});
      });
  };

  onChangeWalletBalance = () => {
    const {id, userPassword} = this.props.details?.auth?.data;
    getWalletBalance(id, userPassword)
      .then(res => {
        if (res?.data?.data?.ack != 1) {
          this.setState({isVerified: false});
          Alert.alert(
            'Message',
            res?.data?.data?.msg,
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
          return;
        }
        this.setState({toataBalance: res?.data?.data?.data, isVerified: true});
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {id, userPassword} = this.props?.details?.auth?.data;
      this.fetchWalletBalance(id, userPassword);
    });

    getUserDetails().then(userDetails => {
      if (userDetails) {
        this.props.signIn(userDetails);
        console.log('==={}{}', userDetails?.id, userDetails?.userPassword);
        this.fetchWalletBalance(userDetails?.id, userDetails?.userPassword);
      }
    });
    console.log('===>>', moment.unix(1609377300).format('DD-MM-YYYY'));

    const firstLabels = [
      moment(Date.now())
        .subtract({hours: 6})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 5})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 4})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 3})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 2})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 1})
        .format('h:mm'),
    ];
    this.onChangeHandleChart(firstLabels, '1D');

    getCurrentBtcPrice()
      .then(res => {
        console.log('===>>', Object.entries(res?.data)?.[0]?.[1]?.last);
        let lastPrice = Object.entries(res?.data)?.[0]?.[1]?.last;
        this.setState({currentBitcoinPrice: lastPrice});
      })
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  onChangeHandleChart = (labels, type) => {
    const LineChartData = {
      labels: labels,

      datasets: [
        {
          data: [Math.random() * 1],
          color: (opacity = 5) => `rgba(255,69,0, 8)`, // optional
          strokeWidth: 2, // optional
        },
      ],
    };

    let fiterByDate;

    switch (type) {
      case '1D':
        fiterByDate = moment(Date.now())
          .subtract({hours: 6})
          .format('YYYY-MM-DD');
        break;

      case '1W':
        fiterByDate = moment(Date.now())
          .subtract({day: 6})
          .format('YYYY-MM-DD');
        break;

      case '1M':
        fiterByDate = moment(Date.now())
          .subtract({month: 5})
          .format('YYYY-MM-DD');
        break;

      case '1Y':
        fiterByDate = moment(Date.now())
          .subtract({month: 9})
          .format('YYYY-MM-DD');
        break;

      case 'All':
        fiterByDate = moment(Date.now())
          .subtract({month: 11})
          .format('YYYY-MM-DD');
        break;

      default:
        break;
    }

    getChartData(fiterByDate)
      .then(res => {
        // console.log('===>>>//', Math.round(res?.data?.values?.length / 6));
        res?.data?.values?.forEach(data => {
          // console.log('====>>>>>', data?.y)
          LineChartData.datasets[0].data.push(data?.y);
        });
        this.setState({LineChartData});
      })
      .catch(err => console.log(err));
  };

  onChangeTab = key => {
    const firstLabels = [
      moment(Date.now())
        .subtract({hours: 6})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 5})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 4})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 3})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 2})
        .format('h:mm'),
      moment(Date.now())
        .subtract({hours: 1})
        .format('h:mm'),
    ];

    const seconedLabels = [
      moment(Date.now())
        .subtract({day: 6})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 4})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 2})
        .format('DD. MMM'),
      moment(Date.now()).format('DD. MMM'),
    ];

    const thirdLabels = [
      moment(Date.now())
        .subtract({day: 28})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 23})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 18})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 14})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 7})
        .format('DD. MMM'),
      moment(Date.now())
        .subtract({day: 1})
        .format('DD. MMM'),
    ];
    const fourthLabels = [
      moment(Date.now())
        .subtract({month: 11})
        .format('MMM. YY'),
      moment(Date.now())
        .subtract({month: 9})
        .format('MMM. YY'),
      moment(Date.now())
        .subtract({month: 7})
        .format('MMM. YY'),
      moment(Date.now())
        .subtract({month: 5})
        .format('MMM. YY'),
      moment(Date.now())
        .subtract({month: 3})
        .format('MMM. YY'),
      moment(Date.now())
        .subtract({month: 1})
        .format('MMM. YY'),
    ];

    const fifthLables = [
      moment(Date.now())
        .subtract({year: 9})
        .format('YYYY'),
      moment(Date.now())
        .subtract({year: 8})
        .format('YYYY'),
      moment(Date.now())
        .subtract({year: 7})
        .format('YYYY'),
      moment(Date.now())
        .subtract({year: 6})
        .format('YYYY'),
      moment(Date.now())
        .subtract({year: 5})
        .format('YYYY'),
      moment(Date.now())
        .subtract({year: 4})
        .format('YYYY'),
      moment(Date.now())
        .subtract({year: 3})
        .format('YYYY'),
    ];

    switch (key) {
      case '1D':
        this.onChangeHandleChart(firstLabels, '1D');
        return;

      case '1W':
        this.onChangeHandleChart(seconedLabels, '1W');
        return;

      case '1M':
        this.onChangeHandleChart(thirdLabels, '1M');
        return;

      case '1Y':
        this.onChangeHandleChart(fourthLabels, '1Y');
        return;

      case 'All':
        this.onChangeHandleChart(fifthLables, 'All');
        return;

      default:
        return;
    }
  };

  render() {
    const {navigation} = this.props;
    const {
      isLoading,
      toataBalance,
      isVerified,
      LineChartData,
      currentBitcoinPrice,
      btcData,
    } = this.state;
    return (
      <>
        <Header navigation={navigation} title="Dashboard" screenName="Home" />
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.totalAreaContainer}>
            <View style={{width: '70%'}}>
              <Text style={styles.totalBalanceText}>Total Balance</Text>

              {isLoading ? (
                <ActivityIndicator
                  color="#192A56"
                  size="large"
                  style={{alignItems: 'flex-start'}}
                />
              ) : (
                <>
                  <Title
                    style={
                      styles.totalAreaShortText
                    }>{`$ ${toataBalance}`}</Title>
                  {!isVerified && (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 20,
                      }}>
                      <Text style={{fontFamily: 'BlissPro', color: '#CE5404'}}>
                        Couldn't fetch the wallet Balance, please try again
                      </Text>
                      <TouchableOpacity onPress={this.onChangeWalletBalance}>
                        <Icon name="reload" color="#000" size={20} />
                      </TouchableOpacity>
                    </View>
                  )}
                </>
              )}
            </View>
            <View style={{width: '30%'}}>{CircleChart(btcData)}</View>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {PriceCard(this.state.usdRate)}
          </ScrollView>
          {this.ChartCard()}

          <RBSheet
            closeOnDragDown={true}
            ref={ref => (this.refRBSheet = ref)}
            height={height / 1.5}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                Current BTC Price
              </Text>
              <Title>{`$ ${currentBitcoinPrice}`}</Title>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#D63031',
                    fontFamily: 'BlissPro',
                    opacity: 0.8,
                  }}>
                  -$462.78 (-3.2%)
                </Text>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                    opacity: 0.5,
                  }}>
                  {' '}
                  Last day
                </Text>
              </View>
            </View>

            <LineChart
              style={{marginBottom: 20}}
              withDots={false}
              data={LineChartData}
              width={width}
              height={180}
              chartConfig={chartConfig}
            />
            <MyTabs onChangeTab={this.onChangeTab} />
          </RBSheet>
        </ScrollView>
      </>
    );
  }
}

export default connect(
  state => ({
    details: state,
  }),
  {
    signIn,
  },
)(HomeScreen);
