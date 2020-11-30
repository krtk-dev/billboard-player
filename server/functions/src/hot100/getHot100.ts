import * as functions from 'firebase-functions'
import { Hot100Item } from '..'
import { getRecentHot100OrderByRank } from '../lib/hot100'

const getHot100 = functions.https.onCall(async (data, context): Promise<Hot100Item[]> => {

    const Hot100Docs = await getRecentHot100OrderByRank(data.afterRank ? data.afterRank : 0)
    return Hot100Docs.docs.map((doc) => doc.data() as Hot100Item)
})



export default getHot100