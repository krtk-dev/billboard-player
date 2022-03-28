import axios from 'axios';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {BillboardData, TrackData} from '../constants/types';
import {DATA_URL} from '../constants/values';

export type PlayerContextType = {
  // state
  data?: TrackData[];
  date?: string;
  index: number;
  // method
  play: (index: number) => void;
  next: () => void;
};

export const PlayerContext = createContext<PlayerContextType>({} as any);

const PlayerProvider: React.FC = ({children}) => {
  const [data, setData] = useState<TrackData[]>();
  const [date, setDate] = useState<string>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const {data: billboardData} = await axios.get<BillboardData>(DATA_URL);
      setData(billboardData.data);
      setDate(billboardData.date);
    })();
  }, []);

  const play = useCallback((_index: number) => {
    setIndex(_index);
  }, []);

  const next = useCallback(() => {
    setIndex(idx => (idx + 1) % 100);
  }, []);

  const contextValue = useMemo<PlayerContextType>(
    () => ({
      data,
      date,
      index,
      play,
      next,
    }),
    [data, date, index, play, next],
  );

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
