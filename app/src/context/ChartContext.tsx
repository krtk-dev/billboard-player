import axios from 'axios';
import React, {createContext, useEffect, useMemo, useState} from 'react';
import {BillboardData, TrackData} from '../constants/types';
import {DATA_URL} from '../constants/values';

export type ChartContextType = {
  // state
  data?: TrackData[];
  date?: string;
};

export const ChartContext = createContext<ChartContextType>({} as any);

const ChartProvider: React.FC = ({children}) => {
  const [data, setData] = useState<TrackData[]>();
  const [date, setDate] = useState<string>();

  useEffect(() => {
    (async () => {
      const {data: billboardData} = await axios.get<BillboardData>(DATA_URL);
      setData(billboardData.data);
      setDate(billboardData.date);
    })();
  }, []);

  const contextValue = useMemo<ChartContextType>(
    () => ({
      data,
      date,
    }),
    [data, date],
  );

  return (
    <ChartContext.Provider value={contextValue}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
