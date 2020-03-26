import * as functions from 'firebase-functions'
import { Hot100Item } from '..'
import BillboardHot100Crawling, { Hot100CrawlingReturn } from './BillBoardHot100Crawling'
import { HttpsError } from 'firebase-functions/lib/providers/https'
import { updateHot100TestDocs, getYoutubeData, setYoutubeData } from '.././lib/hot100'
import titleSinger2Id from '../lib/generator/titleSinger2Id'
import getYoutubeIdImage from './getYoutubeIdImage'

const updateHot100Test = functions.https.onRequest(async (req, res) => {
    try {
        const Hot100List: Hot100Item[] = []
        const Hot100Crawling: Hot100CrawlingReturn[] = await BillboardHot100Crawling()
        if (Hot100Crawling.length !== 100) return
        for (const i in Hot100Crawling) {
            const id = titleSinger2Id(Hot100Crawling[i].title, Hot100Crawling[i].singer)
            const doc = await getYoutubeData(id)
            const data = doc.data()
            console.log(data)
            try {
                if (data) {
                    Hot100List[i] = {
                        ...Hot100Crawling[i],
                        youtube: data.youtube,
                        image: data.image,
                    }
                } else {
                    const youtubeData = await getYoutubeIdImage(id)
                    console.log(youtubeData)
                    await setYoutubeData(id, youtubeData)
                    Hot100List[i] = {
                        ...Hot100Crawling[i],
                        ...youtubeData
                    }
                }
            } catch (error) {
                Hot100List[i] = {
                    ...Hot100Crawling[i],
                    youtube: '',
                    image: ''
                }
            }
        }

        await updateHot100TestDocs(Hot100List)
        res.status(200).send(Hot100List)
    } catch (error) {
        throw new HttpsError('unknown', error.toString())
    }
    return 'done'
})



export default updateHot100Test