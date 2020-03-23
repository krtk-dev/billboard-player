import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { BannerAdSize, BannerAd } from '@react-native-firebase/admob'
import { ADMOBBANNERID } from '../../../secret'

const WIDTH = Dimensions.get('window').width

const BottomBannerAds = () => {
    return (
        <View style={styles.container} >
            <BannerAd
                unitId={ADMOBBANNERID}
                size={WIDTH >= 460 ? BannerAdSize.FULL_BANNER : BannerAdSize.BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: false,
                    testDevices: [
                        'EMULATOR'
                    ]
                }}

                onAdLoaded={() => {
                    // console.log('Advert loaded');
                }}
                onAdFailedToLoad={(error: any) => {
                    // console.error('Advert failed to load: ', error);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default BottomBannerAds
