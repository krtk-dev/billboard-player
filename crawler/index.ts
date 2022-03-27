import fs from 'fs';
import os from 'os';
import dotenv from 'dotenv';
import axios from 'axios';
import cheerio from 'cheerio';

dotenv.config();

interface Data {
  name: string;
  artist: string;
  rank: number;
  weeks_on_chart: number;
  last_week_rank: number;
  youtube_id: string;
  image: string;
}

type BillboardData = Omit<Data, 'youtube_id' | 'image'>;
type YoutubeData = Pick<Data, 'youtube_id' | 'image'>;

export const billboardCrawling = async (): Promise<BillboardData[]> => {
  const res = await axios('https://www.billboard.com/charts/hot-100');

  const $ = cheerio.load(res.data);

  const data: BillboardData[] = [];
  $('.o-chart-results-list-row-container').each((idx, elem) => {
    data.push({
      name: $(elem)
        .find('#title-of-a-story:first')
        .text()
        .replace(/\n/g, '')
        .replace(/\t/g, ''),
      artist: $(elem)
        .find('.c-label:nth-child(2)')
        .text()
        .replace(/\n/g, '')
        .replace(/\t/g, ''),
      rank: idx + 1,
      last_week_rank: 0,
      weeks_on_chart: 0,
    });
  });
  return data;
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
  console.log(await billboardCrawling());
})();
