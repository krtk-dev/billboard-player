import functions from '@react-native-firebase/functions';

export interface Hot100 {
    title: string;
    singer: string;
    image: string;
    rank: number;
}

export default async function (): Promise<Hot100[]> {
    const instance = functions().httpsCallable('getHot100')
    try {
        console.log(1)
        const response = await instance()
        console.log(2)
        return response.data
    } catch (error) {
        throw error
    }

}