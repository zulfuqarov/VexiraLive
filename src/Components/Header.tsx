import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';
import ProfileButton from './ProfileButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  SearchInputShow?: boolean;
  BackButtonShow?: boolean;
}

const Header = ({ SearchInputShow, BackButtonShow }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}
    >
      {SearchInputShow && <SearchInput />}
      {BackButtonShow && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f97316',
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
          }}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
      )}
      <ProfileButton />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
