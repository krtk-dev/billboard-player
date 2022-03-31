import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import {useContext} from 'react';
import {ChartContext} from '../../context/ChartContext';
import HomeScreenItem from './HomeScreenItem';
import Player from '../../components/Player';

const HomeScreen = () => {
  const {data} = useContext(ChartContext);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <HomeScreenHeader />
      {data && (
        <Player
          videoId={data[index].youtube_id}
          onEnded={() => setIndex(idx => (idx + 1) % data.length)}
        />
      )}
      <FlatList
        data={data}
        overScrollMode="never"
        keyExtractor={({artist, name}) => artist + name}
        renderItem={({item, index: _index}) => (
          <HomeScreenItem
            data={item}
            isFocused={index === _index}
            onPress={() => setIndex(_index)}
          />
        )}
        ListFooterComponent={<View style={{height: 400}} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
