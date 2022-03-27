import fs from 'fs';
import os from 'os';
import dotenv from 'dotenv';
import axios from 'axios';
import cheerio from 'cheerio';
// -------------------- Setup -------------------- //

dotenv.config();

// -------------------- Types -------------------- //

interface Data {
  name: string;
  artist: string;
  rank: number;
  weeks_on_chart: number;
  last_week_rank: number | null;
  peak_rank: number;
  youtube_id: string;
  image: string;
}
type BillboardData = Omit<Data, 'youtube_id' | 'image'>;
type YoutubeData = Pick<Data, 'youtube_id' | 'image'>;

// -------------------- Utils -------------------- //
export const removeLineFeed = (str: string) =>
  str.replace(/\n/g, '').replace(/\t/g, '');

// -------------------- Functions -------------------- //

export const billboardCrawling = async (): Promise<BillboardData[]> => {
  const res = await axios('https://www.billboard.com/charts/hot-100');

  const $ = cheerio.load(res.data);

  const data: BillboardData[] = [];
  $('.o-chart-results-list-row-container').each((idx, elem) => {
    const lastWeekRank = removeLineFeed(
      $('.o-chart-results-list__item:nth-child(4) > span', elem).first().text(),
    );

    data.push({
      name: removeLineFeed($(elem).find('h3#title-of-a-story').first().text()),
      artist: removeLineFeed($(elem).find('h3 + span.c-label').text()),
      rank: idx + 1,
      last_week_rank: lastWeekRank === '-' ? null : Number(lastWeekRank),
      peak_rank: Number(
        removeLineFeed(
          $(elem)
            .find('.o-chart-results-list__item:nth-child(5) > span')
            .first()
            .text(),
        ),
      ),
      weeks_on_chart: Number(
        removeLineFeed(
          $(elem)
            .find('.o-chart-results-list__item:nth-child(6) > span')
            .first()
            .text(),
        ),
      ),
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

// -------------------- Main -------------------- //

(async () => {
  console.log(await billboardCrawling());
})();
