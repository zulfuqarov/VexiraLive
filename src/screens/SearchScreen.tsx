import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const SearchScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header SearchInputShow={true} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
