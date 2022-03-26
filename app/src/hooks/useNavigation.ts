import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParamList} from '../navigations';
import {useNavigation as _useNavigation} from '@react-navigation/core';

const useNavigation = () =>
  _useNavigation<StackNavigationProp<NavigationParamList>>();

export default useNavigation;
