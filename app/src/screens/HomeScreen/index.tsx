import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import {useContext} from 'react';
import {PlayerContext} from '../../context/PlayerContext';
import HomeScreenItem from './HomeScreenItem';
import Player from '../../components/Player';

const HomeScreen = () => {
  const {data, next, index} = useContext(PlayerContext);

  return (
    <View>
      <HomeScreenHeader />
      {data && <Player onEnded={next} videoId={data[index].youtube_id} />}
      <FlatList
        data={data}
        overScrollMode="never"
        keyExtractor={({artist, name}) => artist + name}
        renderItem={({item, index: _index}) => (
          <HomeScreenItem data={item} index={_index} />
        )}
        ListFooterComponent={<View style={{height: 400}} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
