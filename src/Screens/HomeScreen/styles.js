import {Dimensions, StyleSheet} from 'react-native';
import styles from '../../Styles/index';
const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  totalAreaContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    ...styles.BoxShdowMedium
  },
  totalBalanceText: {
    fontFamily: 'BlissPro-Bold',
    fontSize: 18,
    opacity: 1,
  },
  totalAreaShortText: {
    fontFamily: 'BlissPro-Bold',
    opacity: 0.8,
  },
  totalAreaColorText: {
    color: '#45CE30',
    fontFamily: 'BlissPro',
  },
  priceContainer: {
    // borderColor: '#DAE0E2',
    // borderWidth: 2,
    borderRadius: 10,
    width: width / 1.5,
    backgroundColor: '#ffffff',
    margin: 10,
    shadowColor: '#000',
    ...styles.BoxShdowMedium,
  },
  priceOuterCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  priceBadgeIcon: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45CE30',
    padding: 10,
    borderRadius: 10,
  },
  priceCardTitle: {
    fontFamily: 'BlissPro-Bold',
    fontSize: 18,
    opacity: 1,
  },
  chartContainer: {
    borderRadius: 10,
    //borderColor: '#DAE0E2',
    // borderWidth: 2,
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 10,
    ...styles.BoxShdowMedium,
  },
  chartOuterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  chartInnerCard: {
    margin: 10,
    padding: 5,
    borderRadius: 100,
    ...styles.BoxShdowMedium,
  },
  chartPriceArea: {
    marginLeft: 40,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
