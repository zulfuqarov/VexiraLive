import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalColor } from '../colors/GlobalColor';

interface IconCardProps {
    name?: string;
    iconName?: string;
}

const IconCard = ({ name, iconName }: IconCardProps) => {
    const { width } = Dimensions.get('window');
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: "rgba(249, 115, 6, 0.7)",
            width: width / 3.2,
            borderRadius: 8,
        }}>
            <View style={{ alignItems: 'center' }}>
                <Ionicons name={iconName} size={32} color="white" />
                <Text
                    style={{
                        marginTop: 7,
                        fontSize: 15,
                        color: 'white',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}
                >{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IconCard

const styles = StyleSheet.create({})