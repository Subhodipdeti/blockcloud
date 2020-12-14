import {DefaultTheme} from 'react-native-paper';
import colors from '../Colors';

const theme = {
  ...DefaultTheme,
  dark: false,
  id: 2,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1749FF',
    accent: '#ffa630',
    background: '#FFF',
    text: colors.black,
    placeholder: colors.ashgrey,
    header: '#192A56',
    headerTitle: colors.white,
    activeColor: '#192A56',
    inactiveColor: '',

    //react-native-paper theme colors
    surface: colors.white,
    primaryText: colors.darkgunmetal,
  },
};

export default theme;