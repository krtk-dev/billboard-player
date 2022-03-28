export interface BillboardData {
  date: string;
  data: TrackData[];
}
export interface TrackData {
  name: string;
  artist: string;
  rank: number;
  weeks_on_chart: number;
  last_week_rank: number | null;
  peak_rank: number;
  youtube_id: string;
  image: string;
}
