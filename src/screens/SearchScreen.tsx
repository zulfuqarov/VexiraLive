import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import { useGetVideoAll } from '../api/Quaries/Queries';
import PopularChanelCard from '../Components/PopularChanelCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const SearchScreen = () => {
  const { data: videoAll } = useGetVideoAll();

  return (
    <View style={{ flex: 1 }}>
      <Header SearchInputShow={true} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          scrollEnabled={false}
          data={videoAll?.allVideos.filter(one => one.category_id !== '16')}
          keyExtractor={item => item.num.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 8, gap: 15 }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          renderItem={({ item }) => (
            <PopularChanelCard
              videosByIdItem={videoAll?.allVideos}
              item={item}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
