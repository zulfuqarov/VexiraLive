import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GlobalColor } from '../colors/GlobalColor'
import { stringify } from '../../node_modules/css-what/lib/es/stringify';
interface Props {
    text: string;
    onPress?: () => void;
    disabled?: boolean;
    style?: object;
}

const CutomButton = ({ text, onPress, disabled, style }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: GlobalColor.primary,
                paddingVertical: 15,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}>
            <Text style={{
                color: "white",
                fontSize: 16,
                fontWeight: '900',
                fontFamily: 'PlusJakartaSans-Medium'
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CutomButton

const styles = StyleSheet.create({})