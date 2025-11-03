import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Dimensions } from 'react-native';

const VideoCardSkeleton = () => {
  const width = Dimensions.get('window').width;
  const heightImage = width * 0.3;

  return (
    <SkeletonPlaceholder
      borderRadius={10}
      backgroundColor="#333"
      highlightColor="#555"
      speed={1200}
    >
      <SkeletonPlaceholder.Item
        width={width * 0.8}
        padding={20}
        marginTop={10}
        borderRadius={10}
      >
        {/* Image Skeleton */}
        <SkeletonPlaceholder.Item
          width="100%"
          height={heightImage}
          borderRadius={10}
        />

        {/* Texts */}
        <SkeletonPlaceholder.Item marginTop={15}>
          <SkeletonPlaceholder.Item width="60%" height={20} marginTop={10} />
          <SkeletonPlaceholder.Item width="40%" height={20} marginTop={10} />
        </SkeletonPlaceholder.Item>
        
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default VideoCardSkeleton;
