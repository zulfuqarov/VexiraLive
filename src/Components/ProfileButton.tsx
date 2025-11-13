import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootTabParamList } from '../type/NavigationsType/NavType';

const ProfileButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image
        source={{
          uri: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/13.jpg',
        }}
        style={{ width: 50, height: 50, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({});
