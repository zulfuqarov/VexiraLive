import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import Header from '../Components/Header';
import { useGetVideoAll } from '../api/Quaries/Queries';
import PopularChanelCard from '../Components/PopularChanelCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const SearchScreen = () => {
  const { data: videoAll } = useGetVideoAll();
  const [serchInput, setSerachInput] = useState('');

  const filteredVideos = useMemo(() => {
    return videoAll?.allVideos
      .filter(one => one.category_id !== '16')
      .filter(one =>
        one.name.toLocaleLowerCase().includes(serchInput.toLocaleLowerCase()),
      );
  }, [videoAll, serchInput]);

  return (
    <View style={{ flex: 1 }}>
      <Header
        SearchInputShow={true}
        serchInput={serchInput}
        setSerachInput={setSerachInput}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          scrollEnabled={false}
          data={filteredVideos}
          keyExtractor={item => item.num.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 8, gap: 15 }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          renderItem={({ item }) => (
            <PopularChanelCard videosByIdItem={filteredVideos} item={item} />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
