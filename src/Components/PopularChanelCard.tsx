import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const PopularChanelCard = () => {
    return (
        <View style={{
            width: "48%",
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            padding: 10
        }}>
            <Image
                source={{ uri: 'https://img.fullhdfilmizlesene.tv/poster/izle-lg/garfield-the-garfield-movie-12022.webp' }}
                style={{ width: '100%', height: 200, borderRadius: 10, objectFit: 'contain' }}
            />
            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginTop: 10, fontFamily: 'PlusJakartaSans-Bold' }}>Test</Text>
            </View>
        </View>
    )
}

export default PopularChanelCard

const styles = StyleSheet.create({})