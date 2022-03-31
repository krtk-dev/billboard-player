import axios from 'axios';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {usePersistedState} from 'react-native-use-persisted-state';
import {TrackData} from '../constants/types';

export type PlaylistContextType = {
  // state
  playlist?: TrackData[];
  // method
  add: (data: TrackData) => void;
  remove: (data: TrackData) => void;
};

export const PlaylistContext = createContext<PlaylistContextType>({} as any);

const PlaylistProvider: React.FC = ({children}) => {
  const [playlist, setPlaylist] = usePersistedState<TrackData[]>(
    '@playlist',
    [],
  );

  const add = useCallback(
    (data: TrackData) => {
      if (
        playlist.find(
          ({name, artist}) => name === data.name && artist === data.artist,
        )
      )
        return;
      setPlaylist([data, ...playlist]);
    },
    [playlist, setPlaylist],
  );

  const remove = useCallback(
    (data: TrackData) => {
      setPlaylist(
        playlist.filter(
          ({artist, name}) => !(name === data.name && artist === data.artist),
        ),
      );
    },
    [playlist, setPlaylist],
  );

  const contextValue = useMemo<PlaylistContextType>(
    () => ({
      playlist,
      add,
      remove,
    }),
    [playlist, add, remove],
  );

  return (
    <PlaylistContext.Provider value={contextValue}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
