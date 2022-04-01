import React from 'react'
import { View, Text } from 'native-base'

export default function MainButton({ data }) {
  return (
    <View
      backgroundColor='#3e3bda'
      borderRadius='8px'
      height='60px'
      justifyContent='center'
    >
      <Text
        letterSpacing='2px'
        color='#fff'
        fontSize={18}
        lineHeight={21.78}
        fontFamily={'Inter_600SemiBold'}
        textAlign='center'
      >
        {data}
      </Text>
    </View>
  )
}
