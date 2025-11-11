import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootHomeStackParaList } from '../type/NavigationsType/NavType';
import { VideoType } from '../type/ApiType/VideoType';
import ErroImg from '../../assets/img/SplashScreen.png';
type VideoCardProps = {
  item: VideoType;
  videosByIdItem: VideoType[] | undefined;
};
type HomeStackNavigationProp = NativeStackNavigationProp<RootHomeStackParaList>;

const PopularChanelCard = ({ item, videosByIdItem }: VideoCardProps) => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WatchNawScreen', {
          stream_id: item.stream_id,
          data: videosByIdItem,
        })
      }
      style={{
        width: '48%',
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Image
        source={item?.stream_icon ? { uri: item.stream_icon } : ErroImg}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          objectFit: 'contain',
        }}
      />
      <View style={{ marginVertical: 15 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
            marginTop: 10,
            fontFamily: 'PlusJakartaSans-Bold',
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularChanelCard;

const styles = StyleSheet.create({});
