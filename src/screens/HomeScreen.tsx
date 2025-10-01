import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

import SearchInput from '../Components/SearchInput'
import ProfileButton from '../Components/ProfileButton'
import Categorys from '../Components/Categorys'
import VideoCard from '../Components/VideoCard'
import PopularChanelCard from '../Components/PopularChanelCard'
import { useVideoCategories } from '../api/Quaries/Queries'
import { VideoCategoryType } from '../type/ApiType/VideoType'

const HomeScreen = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { data: videoCategories, isLoading, isError } = useVideoCategories();


  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <SearchInput />
        <ProfileButton />
      </View>

      {/* Channel Categories */}
      <View style={{ marginVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {videoCategories && videoCategories.map((channel: VideoCategoryType, index: number) => (
            <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
              <Categorys index={index} activ={activeIndex} name={channel.category_name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Main Content */}
      <FlatList
        ListHeaderComponent={
          <>
            {/* Horizontal Video Cards */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 8, gap: 15 }}
            >
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </ScrollView>

            {/* Popular Channels Title */}
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '700', marginTop: 20, marginLeft: 10, fontFamily: 'PlusJakartaSans-Bold', marginBottom: 15 }}>
              Popular Channels
            </Text>
          </>
        }
        data={[1, 2, 3, 4]}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
        renderItem={({ item }) => <PopularChanelCard />}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
