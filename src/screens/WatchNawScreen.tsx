import React, { useEffect, useState } from 'react';
import {
  View,
  Dimensions,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootHomeStackParaList } from '../type/NavigationsType/NavType';
import VideoPlay from '../Components/VideoPlay';
import ChannelItem from '../Components/ChannelItem';
import Header from '../Components/Header';

type WatchRouteProp = RouteProp<RootHomeStackParaList, 'WatchNawScreen'>;

const WatchNawScreen: React.FC = () => {
  const { height } = Dimensions.get('window');

  const route = useRoute<WatchRouteProp>();
  const { stream_id, data } = route.params;

  const [changeStreamId, setChangeStreamId] = useState<number | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: '#111827' }}>
      <Header BackButtonShow={true} />
      {/* Video Player */}
      <View style={{ height: height / 3 }}>
        {stream_id ? (
          <VideoPlay stream_id={changeStreamId ? changeStreamId : stream_id} />
        ) : (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ color: '#fff' }}>Kanal seçilməyib</Text>
          </View>
        )}
      </View>

      {/* Kanal Listi */}
      <View style={{ flex: 1, padding: 10 }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          Kanallar
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ChannelItem item={item} setChangeStreamId={setChangeStreamId} />
          )}
        />
      </View>
    </View>
  );
};

export default WatchNawScreen;
