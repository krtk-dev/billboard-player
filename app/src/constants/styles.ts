import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('screen').height;
export const STATUSBAR_HEIGHT = getStatusBarHeight();

export const COLORS = {
  white: '#FFF',
  black: '#000',
};

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};
