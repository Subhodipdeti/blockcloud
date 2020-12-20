import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Title } from 'react-native-paper';
import { ProgressCircle, StackedAreaChart } from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as shape from 'd3-shape';
import RBSheet from 'react-native-raw-bottom-sheet';
import { LineChart } from 'react-native-chart-kit';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListView from './ListView';
import styles from './styles';
import { LineChartData, StackedAreaChartData } from '../../Models/index';
import Header from '../../Components/Header';
import { connect } from 'react-redux';
import { signIn } from '../../Store/Actions/authActions';
import useAppTheme from '../../Themes/Context';
import { getUserDetails } from '../../Services/AsyncStorage';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="1D" component={ListView} />
      <Tab.Screen name="1W" component={ListView} />
      <Tab.Screen name="1M" component={ListView} />
      <Tab.Screen name="1Y" component={ListView} />
      <Tab.Screen name="All" component={ListView} />
    </Tab.Navigator>
  );
}

const { height, width } = Dimensions.get('screen');

const LineChartpreview = () => {
  const colors = ['#1749FF', '#4834DF', '#30336B', '#3C40C6'];
  const keys = ['apples', 'bananas', 'cherries', 'dates'];
  const svgs = [
    { onPress: () => console.log('apples') },
    { onPress: () => console.log('bananas') },
    { onPress: () => console.log('cherries') },
    { onPress: () => console.log('dates') },
  ];

  return (
    <StackedAreaChart
      style={{ height: 30 }}
      data={StackedAreaChartData}
      keys={keys}
      colors={colors}
      curve={shape.curveNatural}
      showGrid={false}
      svgs={svgs}
    />
  );
};

const CircleChart = () => {
  return (
    <ProgressCircle
      style={{ height: 100 }}
      progress={0.4}
      progressColor={'rgba(23, 73, 255, 1)'}
    />
  );
};

const HomeScreen = ({ navigation, getData, userData, details, signIn }) => {
  console.log('===>>', details?.auth?.data);
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

  useEffect(() => {
    getUserDetails()
      .then(userDetails => {
        if (userDetails) {
          signIn(userDetails);
        }
      })
  }, [])

  const refRBSheet = useRef();

  const { theme } = useAppTheme();

  function PriceCard() {
    const cards = [1, 2, 3];
    return cards.map((item, index) => {
      return (
        <View style={styles.priceContainer} key={index}>
          <View style={styles.priceOuterCard}>
            <View style={styles.priceBadgeIcon}>
              <Title style={{ color: '#fff' }}>$</Title>
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
                }}>
                0.00
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                US$0.00
              </Text>
            </View>
          </View>
        </View>
      );
    });
  }

  function ChartCard() {
    const cards = [1, 2];
    return cards.map((item, index) => {

      return (
        <TouchableOpacity
          key={index}
          style={styles.chartContainer}
          onPress={() => refRBSheet.current.open()}>
          <View style={styles.chartOuterCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={[
                  styles.chartInnerCard,
                  { backgroundColor: index == 1 ? '#FAC42F' : '#45CE30' },
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

            <View style={{ width: '30%' }}>{LineChartpreview()}</View>
          </View>

          <View style={styles.chartPriceArea}>
            <View>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.8,
                }}>
                $0.00
              </Text>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                0 BTC
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
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
                  $14,176.86
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
  }

  return (
    <>
      <Header navigation={navigation} title="Dashboard" screenName="Home" />
      <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={styles.totalAreaContainer}>
          <View>
            <Text style={styles.totalBalanceText}>Total Balance</Text>
            <Title style={styles.totalAreaShortText}>15.00</Title>
            <Text style={styles.totalAreaColorText}>0.00 (--)</Text>
          </View>
          <View style={{ width: '30%' }}>{CircleChart()}</View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {PriceCard()}
        </ScrollView>
        {ChartCard()}


        <RBSheet closeOnDragDown={true} ref={refRBSheet} height={height / 1.5}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.5,
              }}>
              Current BTC Price
            </Text>
            <Title>$14, 043.36</Title>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
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
            withDots={false}
            data={LineChartData}
            width={width}
            height={180}
            chartConfig={chartConfig}
          />

          <MyTabs />
        </RBSheet>
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
)(HomeScreen);

