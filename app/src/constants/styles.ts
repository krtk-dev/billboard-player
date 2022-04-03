import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('screen').height;
export const STATUSBAR_HEIGHT = getStatusBarHeight();

export const COLORS = {
  white: '#FFF',
  black: '#000',
  gray: '#222',
  light_gray: '#888',
  dark_gray: '#111',
  blue: '#1A73E8',
  red: '#E44034',
  yellow: '#FABC05',
};
