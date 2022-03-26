import {Pressable, PressableProps, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const BorderlessButton: React.FC<PressableProps> = props => {
  const [radius, setRadius] = useState<number>();

  return (
    <Pressable
      onLayout={e =>
        setRadius(
          Math.max(e.nativeEvent.layout.height, e.nativeEvent.layout.width) / 2,
        )
      }
      android_ripple={{borderless: true, color: '#ccc', radius}}
      {...props}
    />
  );
};

export default BorderlessButton;

const styles = StyleSheet.create({});
