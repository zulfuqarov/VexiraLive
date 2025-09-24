import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Video from 'react-native-video';
import IconCard from '../Components/IconCard';
const WatchNawScreen: React.FC = () => {
    const { height } = Dimensions.get('window');

    return (
        <View
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    height: height / 3,
                }}>
                <Video
                    source={{ uri: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4" }}
                    style={{
                        width: '100%',
                        height: "100%",
                        backgroundColor: 'transparent',
                    }}
                    controls
                    resizeMode="contain"
                    onError={(e) => console.log('Video error:', e.error)}
                    onBuffer={(buffer) => console.log('Video Loading:', buffer.isBuffering)}
                />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    paddingVertical: 10,
                }}>
                    <IconCard name='Favorites' iconName='bookmark-sharp' />
                    <IconCard name="Reminder" iconName='alarm-sharp' />
                    <IconCard name="Share" iconName='share-social-sharp' />
                </View>
                <View
                    style={{
                        flex: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#1f2937',
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 32,
                        fontWeight: 'bold',
                        paddingTop: 20
                    }}>
                        Chanel Info
                    </Text>
                    <Text style={{
                        color: '#9ca3af',
                        paddingTop: 10,
                        fontSize: 18,
                        lineHeight: 26
                    }}>
                        This is a description of the video. It provides more details about the content being watched.
                        This is a description of the video. It provides more details about the content being watched.
                    </Text>
                </View>
                <View
                    style={{
                        flex: 4
                    }}>
                    {/* content */}
                </View>
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