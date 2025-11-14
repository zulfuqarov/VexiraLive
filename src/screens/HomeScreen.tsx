import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import React, { useMemo, useState } from 'react';

import SearchInput from '../Components/SearchInput';
import ProfileButton from '../Components/ProfileButton';
import Categorys from '../Components/Categorys';
import VideoCard from '../Components/VideoCard';
import PopularChanelCard from '../Components/PopularChanelCard';

import {
  useVideoCategories,
  useGetVideosByCategoryId,
  useGetVideoAll,
} from '../api/Quaries/Queries';
import { VideoCategoryType } from '../type/ApiType/VideoType';
import VideoCardSkeleton from '../Components/VideoCardSkeleton';
import { NoVideoPlaceholder } from '../Components/NoVideoPlaceholder';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Header from '../Components/Header';
import PopularChanelScletion from '../Components/PopularChanelScletion';

const HomeScreen = () => {
  const [isPopularVideoLoading, setIsPopularVideoLoading] =
    useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    '1',
  );

  const { data: videoCategories, isLoading, isError } = useVideoCategories();
  const {
    data: videosById,
    isLoading: isVideosLoading,
    refetch: refetchVideoByCategory,
    isFetching,
  } = useGetVideosByCategoryId(selectedCategoryId || '');

  const {
    data: populatTopVideo,
    refetch,
    isFetching: popularTopLoading,
  } = useGetVideoAll();

  const [serchInput, setSerachInput] = useState('');

  const SerachFilter = useMemo(() => {
    return videosById?.filter(one =>
      one.name.toLocaleLowerCase().includes(serchInput.toLocaleLowerCase()),
    );
  }, [videosById, serchInput]);

  return (
    <View style={{ flex: 1 }}>
      <Header
        SearchInputShow={true}
        serchInput={serchInput}
        setSerachInput={setSerachInput}
      />
      {/* Channel Categories */}
      <View style={{ marginVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {videoCategories &&
            videoCategories.map((channel: VideoCategoryType, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedCategoryId(channel.category_id);
                  setActiveIndex(index);
                }}
              >
                <Categorys
                  index={index}
                  activ={activeIndex}
                  name={channel.category_name}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>

      <KeyboardAwareScrollView
        refreshControl={
          <RefreshControl
            refreshing={isPopularVideoLoading}
            onRefresh={async () => {
              setIsPopularVideoLoading(true);
              try {
                await refetch();
              } catch (error) {
                console.log(error);
              } finally {
                setIsPopularVideoLoading(false);
              }
            }}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content */}
        <FlatList
          scrollEnabled={false}
          ListHeaderComponent={
            <>
              {/* Horizontal Video Cards */}
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={SerachFilter}
                keyExtractor={item => item.num.toString()}
                contentContainerStyle={{ paddingHorizontal: 8, gap: 15 }}
                renderItem={({ item }) => (
                  <VideoCard videosByIdItem={SerachFilter} item={item} />
                )}
                ListEmptyComponent={
                  isFetching ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 15,
                        paddingHorizontal: 8,
                      }}
                    >
                      {[1, 2, 3, 4, 5].map(i => (
                        <VideoCardSkeleton key={i} />
                      ))}
                    </View>
                  ) : (
                    <NoVideoPlaceholder
                      message="Seçilmiş kateqoriyada video tapılmadı. Başqa kateqoriyaya baxın və ya yenidən yoxlayın."
                      onRetry={refetchVideoByCategory}
                    />
                  )
                }
              />

              {/* Popular Channels Title */}
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: '700',
                  marginTop: 20,
                  marginLeft: 10,
                  fontFamily: 'PlusJakartaSans-Bold',
                  marginBottom: 15,
                }}
              >
                Popular Channels
              </Text>
            </>
          }
          data={populatTopVideo}
          numColumns={2}
          keyExtractor={item => item.num.toString()}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          renderItem={({ item }) =>
            popularTopLoading ? (
              <PopularChanelScletion />
            ) : (
              <PopularChanelCard videosByIdItem={populatTopVideo} item={item} />
            )
          }
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
