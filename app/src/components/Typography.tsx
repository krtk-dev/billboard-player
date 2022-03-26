import {Text, TextProps} from 'react-native';

import React from 'react';
import {COLORS} from '../constants/styles';

const Typography: React.FC<TextProps> = ({...props}) => (
  <Text {...props} style={[{color: COLORS.white}, props.style]} />
);

export default Typography;
