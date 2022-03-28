import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenPlayer from './HomeScreenPlayer';
import {useContext} from 'react';
import {PlayerContext} from '../../context/PlayerContext';
import HomeScreenItem from './HomeScreenItem';

const HomeScreen = () => {
  const {data} = useContext(PlayerContext);

  return (
    <View>
      <HomeScreenHeader />
      <HomeScreenPlayer />
      <FlatList
        data={data}
        overScrollMode="never"
        keyExtractor={({artist, name}) => artist + name}
        renderItem={({item, index}) => (
          <HomeScreenItem {...item} index={index} />
        )}
        ListFooterComponent={<View style={{height: 400}} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
