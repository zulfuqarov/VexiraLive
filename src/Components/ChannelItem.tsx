import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { VideoType } from '../type/ApiType/VideoType';

type ChannelItem = {
  item: VideoType;
  setChangeStreamId: React.Dispatch<React.SetStateAction<number | null>>;
};

const ChannelItem = ({ item, setChangeStreamId }: ChannelItem) => {
  return (
    <TouchableOpacity
      onPress={() => setChangeStreamId(item.stream_id)}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        padding: 12,
        backgroundColor: '#1e293b',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      }}
    >
      {item.stream_icon ? (
        <Image
          source={{ uri: item.stream_icon }}
          style={{
            width: 50,
            height: 50,
            marginRight: 12,
            borderRadius: 10,
            backgroundColor: '#334155',
          }}
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
            marginRight: 12,
            borderRadius: 10,
            backgroundColor: '#334155',
          }}
        />
      )}

      {/* Kanal adı */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '600' }}>
          {item.name}
        </Text>

        <Text style={{ color: '#94a3b8', fontSize: 13, marginTop: 2 }}>
          Stream ID: {item.stream_id}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChannelItem;
