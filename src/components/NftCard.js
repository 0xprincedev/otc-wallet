import React from 'react'
import { Image, Text, View } from 'native-base'

const NftCard = ({ name, uri }) => {
  return (
    <View mx='5px' my='15px' borderRadius='30px'>
      <Image
        source={require('../assets/image/nft1.png')}
        size='170px'
        borderRadius='2px'
        alt='nft image'
      />
      <View
        position='absolute'
        height='32px'
        bg='#7A7A7A'
        width='100%'
        bottom='0px'
        opacity='0.6'
        justifyContent='center'
      >
        <Text
          fontFamily={'Inter_500Medium'}
          fontSize={16}
          lineHeight={19.36}
          textAlign='center'
          color='#fff'
        >
          {name}
        </Text>
      </View>
    </View>
  )
}
export default NftCard
