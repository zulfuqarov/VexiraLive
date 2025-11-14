import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PopularChanelCardSkeleton = () => {
  return (
    <View
      style={{
        width: '48%',
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 10,
      }}
    >
      <SkeletonPlaceholder
        borderRadius={10}
        backgroundColor="#333"
        highlightColor="#555"
        speed={1200}
      >
        <SkeletonPlaceholder.Item width="100%" height={200} borderRadius={10} />

        <SkeletonPlaceholder.Item marginTop={15}>
          <SkeletonPlaceholder.Item width="80%" height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default PopularChanelCardSkeleton;
