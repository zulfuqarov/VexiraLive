import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import CustomButton from './CutomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootHomeStackParaList } from '../type/NavigationsType/NavType';
import { VideoType } from '../type/ApiType/VideoType';
type VideoCardProps = {
  item: VideoType;
  videosByIdItem: VideoType[] | undefined;
};
type HomeStackNavigationProp = NativeStackNavigationProp<RootHomeStackParaList>;

const VideoCard = ({ item, videosByIdItem }: VideoCardProps) => {
  const width = Dimensions.get('window').width;
  const heightImage = width * 0.3;

  const navigation = useNavigation<HomeStackNavigationProp>();
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
        width: width * 0.8,
      }}
    >
      <Image
        source={{
          uri: item.stream_icon,
        }}
        style={{
          width: '100%',
          height: heightImage,
          borderRadius: 10,
          objectFit: 'contain',
        }}
      />
      <View style={{ marginVertical: 15 }}>
        <Text
          style={{
            color: '#1E1E1E',
            fontSize: 18,
            fontWeight: '700',
            marginTop: 10,
            fontFamily: 'PlusJakartaSans-Bold',
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: 17,
            fontWeight: '700',
            marginTop: 5,
            fontFamily: 'PlusJakartaSans-Regular',
          }}
        >
          {item.stream_type}
        </Text>
      </View>
      <CustomButton
        onPress={() =>
          navigation.navigate('WatchNawScreen', {
            stream_id: item.stream_id,
            data: videosByIdItem,
          })
        }
        text="Watch Now"
      />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
