import axios from 'axios'
const secretKey = require('../../key/secretKey')
const GOOGLEAPI = secretKey.googleAPI

export type youtubeReturn = {
    image: string,
    youtube: string,
}

export default async function (id: string): Promise<youtubeReturn> {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            key: GOOGLEAPI,
            part: 'snippet',
            q: id,
            maxResults: 1
        },
    })
    // console.log(response.data.items[0].id.videoId)
    return {
        image: response.data.items[0].snippet.thumbnails.medium.url,
        youtube: response.data.items[0].id.videoId
    }
}