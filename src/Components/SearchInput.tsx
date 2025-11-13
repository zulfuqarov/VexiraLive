import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface SearchPops {
  setSerachInput?: (value: string) => void;
  serchInput?: string;
}
const SearchInput = ({ setSerachInput, serchInput }: SearchPops) => {
  return (
    <View style={{ flex: 1, marginRight: 30 }}>
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search to Channel"
          placeholderTextColor="white"
          value={serchInput}
          onChangeText={setSerachInput}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    backgroundColor: '#2c2c2e',
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 8,
  },
});
