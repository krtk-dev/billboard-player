import * as functions from 'firebase-functions'
import { Hot100Item } from '..'
import BillboardHot100Crawling from './BillBoardHot100Crawling'
import { HttpsError } from 'firebase-functions/lib/providers/https'
import { updateHot100Docs } from '.././lib/hot100'

const updateHot100 = functions.https.onRequest(async () => {

    try {
        const newHot100: Hot100Item[] = await BillboardHot100Crawling()
        await updateHot100Docs(newHot100)
    } catch (error) {
        throw new HttpsError('unknown', error.toString())
    }
    return 'done'
})



export default updateHot100