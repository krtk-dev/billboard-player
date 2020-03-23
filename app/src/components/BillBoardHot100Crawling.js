const axios = require('axios')
const cheerio = require('react-native-cheerio')

const onlyTypeTag = ({ type }) => type == 'tag'


export default async function () {
    const res = await axios("https://www.billboard.com/charts/hot-100")
    console.log(res.status)
    // console.log(res.data)
    if (res.status == 200) {
        const $ = cheerio.load(res.data);
        const data = []
        $('#charts > div > div.chart-list.container > ol > li > button > span.chart-element__information > span.chart-element__information__song.text--truncate.color--primary').each(function (i, elem) {
            data[i] = {
                title: $(this).text()
            }
        });
        $('#charts > div > div.chart-list.container > ol > li > button > span.chart-element__information > span.chart-element__information__artist.text--truncate.color--secondary').each(function (i, elem) {
            data[i] = {
                ...data[i],
                singer: $(this).text()
            }
        });
        return data
    }


    throw Error('error')
}
