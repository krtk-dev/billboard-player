import {TrackData} from '../constants/types';

const trackDataCompare = (data1: TrackData, data2: TrackData) => {
  return data1.artist === data2.artist && data1.name === data2.name;
};

export default trackDataCompare;
