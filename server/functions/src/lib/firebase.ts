import * as admin from 'firebase-admin';


const servicekey = require('../../key/serviceKey.json')
const secretKey = require('../../key/secretKey.json')

admin.initializeApp({
    credential: admin.credential.cert(servicekey),
    databaseURL: secretKey.databaseUrl
});

type dataCollectionDocid = 'hot100Data'
export type dataHot100dataType = {
    recentDocsDate: number,
    recentDocsId: string
}

export const COLLECTION_BILLBOARD_HOT_100 = 'hot100'
export const COLLECTION_BILLBOARD_HOT_100_DATA = 'hot100data'
export const COLLECTION_BILLBOARD_HOT_100_TEST = 'hot100test'
export const COLLECTION_YOUTUBE_DATA = 'youtubeData'
export const COLLECTION_DATA = 'data'

export const firestore = admin.firestore()

export const database = admin.database()
export const messaging = admin.messaging()

export const hot100Collection = (docid: string) => firestore.collection(COLLECTION_BILLBOARD_HOT_100).doc(docid).collection(COLLECTION_BILLBOARD_HOT_100_DATA)
export const dataCollection = (docid: dataCollectionDocid) => firestore.collection(COLLECTION_DATA).doc(docid)
export const hot100TestCollection = firestore.collection(COLLECTION_BILLBOARD_HOT_100_TEST)
export const youtubeDataCollection = firestore.collection(COLLECTION_YOUTUBE_DATA)