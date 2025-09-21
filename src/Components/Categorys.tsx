import { StyleSheet, Text, View } from 'react-native'
import { GlobalColor } from '../colors/GlobalColor'
import React from 'react'

const Categorys = ({ name, activ, index }: { name: string, activ: number | null, index: number }) => {
    return (
        <View style={{ padding: 10, backgroundColor: GlobalColor.primary, borderRadius: 20, marginRight: 10, borderColor: activ === index ? GlobalColor.textPrimary : "transparent", borderWidth: 1 }}>
            <Text style={{
                fontFamily: 'PlusJakartaSans-Bold',
                color: activ === index ? GlobalColor.textPrimary
                    : "#000000",
            }}>{name}</Text>
        </View>
    )
}

export default Categorys

const styles = StyleSheet.create({})