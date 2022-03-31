import React, {createContext, useCallback, useMemo} from 'react';
import {usePersistedState} from 'react-native-use-persisted-state';
import {TrackData} from '../constants/types';
import trackDataCompare from '../util/trackDataCompare';

export type PlaylistContextType = {
  // state
  playlist: TrackData[];
  // method
  toggle: (data: TrackData) => void;
};

export const PlaylistContext = createContext<PlaylistContextType>({} as any);

const PlaylistProvider: React.FC = ({children}) => {
  const [playlist, setPlaylist] = usePersistedState<TrackData[]>(
    '@playlist',
    [],
  );

  const toggle = useCallback(
    (data: TrackData) => {
      if (playlist.find(_data => trackDataCompare(_data, data))) {
        setPlaylist(playlist.filter(_data => !trackDataCompare(_data, data)));
      } else {
        setPlaylist([data, ...playlist]);
      }
    },
    [playlist, setPlaylist],
  );

  const contextValue = useMemo<PlaylistContextType>(
    () => ({
      playlist,
      toggle,
    }),
    [playlist, toggle],
  );

  return (
    <PlaylistContext.Provider value={contextValue}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
