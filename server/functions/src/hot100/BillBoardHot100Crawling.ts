import axios from 'axios'
import * as cheerio from 'cheerio'

export type Hot100CrawlingReturn = {
    rank: number,
    title: string,
    singer: string,
}

export default async function (): Promise<Hot100CrawlingReturn[]> {
    const res = await axios("https://www.billboard.com/charts/hot-100")
    console.log(res.status)

    const $ = cheerio.load(res.data);
    const data: any[] = []
    $('#charts > div > div.chart-list.container > ol > li > button > span.chart-element__information > span.chart-element__information__song.text--truncate.color--primary').each(function (i, elem) {
        data[i] = {
            rank: i + 1,
            title: $(elem).text()
        }
    });
    $('#charts > div > div.chart-list.container > ol > li > button > span.chart-element__information > span.chart-element__information__artist.text--truncate.color--secondary').each(function (i, elem) {
        data[i] = {
            ...data[i],
            singer: $(elem).text()
        }
    });



    return data as Hot100CrawlingReturn[]
}