import fs from 'fs';
import os from 'os';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

interface Data {
  ranking: number;
  name: string;
  artist: string;
  youtube_id: string;
  image: string;
}

type BillboardData = Omit<Data, 'youtube_id' | 'image'>;
type YoutubeData = Pick<Data, 'youtube_id' | 'image'>;

export const billboardCrawling = async (): Promise<BillboardData[]> => {
  return [];
};

export const youtubeSearch = async (q: string): Promise<YoutubeData> => {
  const response = await axios.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        part: 'snippet',
        q,
        maxResults: 1,
      },
    },
  );
  return {
    image: response.data.items[0].snippet.thumbnails.medium.url,
    youtube_id: response.data.items[0].id.videoId,
  };
};

// export const save = () => {};

(async () => {
  await youtubeSearch('hello - adele M/V');
})();
