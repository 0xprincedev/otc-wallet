import React from 'react'
import { View, Text } from 'native-base'

const NftProp = ({ title, info }) => {
  return (
    <View
      bg='#FFFFFF33'
      borderWidth='1px'
      borderColor='#7D7D7D'
      borderRadius='4px'
      my='6px'
      mr='14px'
    >
      <Text
        fontFamily={'Inter_400Regular'}
        fontSize={10}
        lineHeight={12.1}
        color='#fff'
        mt='2px'
        ml='6px'
        mr='6px'
      >
        {title}:
      </Text>
      <Text
        fontFamily={'Inter_600SemiBold'}
        fontSize={14}
        lineHeight={16.94}
        color='#fff'
        ml='6px'
        mb='2px'
        mr='6px'
      >
        {info}
      </Text>
    </View>
  )
}

export default NftProp
