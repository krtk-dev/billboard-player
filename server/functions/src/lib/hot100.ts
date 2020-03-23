import { QuerySnapshot } from '@google-cloud/firestore'
import { hot100Collection } from './firebase'
import { Hot100Item } from '..'

export const getRecentHot100OrderByRank = async (): Promise<QuerySnapshot> => {
    return await hot100Collection
        .orderBy('rank', 'asc')
        .get()
}

export const updateHot100Docs = async (newHot100: Hot100Item[]) => {

    await initHot100()

    for (let i = 0; i < newHot100.length; i++) {
        await hot100Collection.add(newHot100[i])
    }

    return
}

export const initHot100 = async () => {
    const res = await hot100Collection.get()
    const docs = res.docs
    for (let i = 0; i < docs.length; i++) {
        await hot100Collection.doc(docs[i].id).delete()
    }
    return
}