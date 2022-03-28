import {Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.koreanthinker.billboard';

export const DATA_URL =
  'https://raw.githubusercontent.com/krtk-dev/billboard-player/main/data/recent.json';
