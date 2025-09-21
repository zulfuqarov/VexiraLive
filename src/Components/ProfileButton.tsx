import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileButton = () => {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/13.jpg' }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
            />
        </TouchableOpacity>
    )
}

export default ProfileButton

const styles = StyleSheet.create({})