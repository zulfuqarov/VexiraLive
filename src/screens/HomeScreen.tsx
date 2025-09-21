import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchInput from '../Components/SearchInput'
import ProfileButton from '../Components/ProfileButton'
import Categorys from '../Components/Categorys'

const channels: string[] = [
  "Rock",
  "World News",
  "Football Highlights",
  "Indie Movies",
  "Gaming Zone",
  "Tech Talks",
  "Around the World",
  "History Lessons",
  "Lifestyle & Health",
  "Stand-up Comedy",
  "Jazz Classics",
  "Science Today",
  "Cooking Secrets",
  "Travel Diaries",
  "Motivation"
];

const HomeScreen = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <SearchInput />
        <ProfileButton />
      </View>
      <View style={{ marginTop: 10 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {channels.map((channel, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveIndex(index)}
            >
              <Categorys index={index} activ={activeIndex} key={index} name={channel} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})