import * as admin from 'firebase-admin';


const servicekey = require('../../key/serviceKey.json')


admin.initializeApp({
    credential: admin.credential.cert(servicekey),
    databaseURL: "https://billboard-fb9c4.firebaseio.com"
});

export const COLLECTION_BILLBOARD_HOT_100 = 'hot100'

export const firestore = admin.firestore()

export const database = admin.database()
export const messaging = admin.messaging()

export const hot100Collection = firestore.collection(COLLECTION_BILLBOARD_HOT_100)