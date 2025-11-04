import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Video from 'react-native-video';
type VideoPlayProps = {
  stream_id: number;
};
const VideoPlay = ({ stream_id }: VideoPlayProps) => {
  return (
    <Video
      key={stream_id}
      source={{
        uri: `http://teammedia.pw:25461/Azer0138/XyHP50rEnH6/${stream_id}`,
      }}
      style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
      controls
      resizeMode="contain"
      onError={e => console.log('Video error:', e)}
      onBuffer={buffer => console.log('Buffering:', buffer.isBuffering)}
    />
  );
};

export default VideoPlay;

const styles = StyleSheet.create({});
