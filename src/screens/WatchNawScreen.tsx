import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const WatchNawScreen = () => {


    const { height } = Dimensions.get('window');
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                height: height / 3,
            }}>
                <Video
                    source={{ uri: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4" }}
                    style={{
                        width: '100%',
                        height: "100%",
                        backgroundColor: 'transparent',
                    }}
                    controls={true}
                    resizeMode="contain"
                    onError={(e) => console.log('Video error:', e.error)}
                    onBuffer={(buffer) => console.log('Video Loading:', buffer.isBuffering)}
                />
            </View>
            <View style={{
                flex: 1,
            }}>

            </View>
        </View>
    )
}

export default WatchNawScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: 300,
    },
})