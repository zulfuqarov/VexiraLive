import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react'
import CustomButton from './CutomButton'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootHomeStackParaList } from '../type/NavigationsType/NavType';

type HomeStackNavigationProp = NativeStackNavigationProp<RootHomeStackParaList>;

const VideoCard = () => {
    const width = Dimensions.get('window').width;
    const navigation = useNavigation<HomeStackNavigationProp>();
    return (
        <View style={{
            backgroundColor: '#1E1E1E',
            marginTop: 10,
            padding: 20,
            borderRadius: 10,
            width: width * 0.8,
        }}>
            <Image
                source={{ uri: 'https://img.fullhdfilmizlesene.tv/poster/izle-lg/garfield-the-garfield-movie-12022.webp' }}
                style={{ width: '100%', height: 200, borderRadius: 10, objectFit: 'contain', }}
            />
            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginTop: 10, fontFamily: 'PlusJakartaSans-Bold' }}>
                    Garfield is a lazy, fat
                </Text>
                <Text style={{ color: 'orange', fontSize: 14, fontWeight: '400', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}>
                    Genre: Comedy, Family, Animation
                </Text>
            </View>
            <CustomButton onPress={() => navigation.navigate("WatchNawScreen")} text="Watch Now" />
        </View>
    )
}

export default VideoCard

const styles = StyleSheet.create({})