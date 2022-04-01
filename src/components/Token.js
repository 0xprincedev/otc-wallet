import React from 'react'
import { HStack, View, Image, Text } from 'native-base'

const Token = ({ data }) => {
  return (
    <HStack mb='10px'>
      <Image
        size='50px'
        alt='crypto'
        borderRadius='25px'
        source={require('../assets/image/coin.png')}
      />
      <View ml='20px' mr='auto'>
        <Text
          fontFamily={'Inter_500Medium'}
          fontSize={16}
          lineHeight={19.36}
          color='#fff'
        >
          {data.name}
        </Text>
        <Text
          mt='13px'
          color='#fff'
          fontFamily={'OpenSans_400Regular'}
          fontSize={14}
          lineHeight={16.78}
        >
          $ US {data.price}
          {'   '}
          <Text color='#09930F'>{data.percent}%</Text>
        </Text>
      </View>
      <Text
        color='#fff'
        fontFamily={'OpenSans_400Regular'}
        fontSize={14}
        lineHeight={16.78}
      >
        {data.stock}
      </Text>
    </HStack>
  )
}

export default Token
