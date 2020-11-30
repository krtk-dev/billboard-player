import functions from '@react-native-firebase/functions';

export interface Hot100 {
    title: string;
    singer: string;
    image: string;
    rank: number;
    youtube: string;
}

export default async function (params: object): Promise<Hot100[]> {
    const instance = functions().httpsCallable('getHot100')
    try {
        const response = await instance(params)
        return response.data
    } catch (error) {
        throw error
    }

}