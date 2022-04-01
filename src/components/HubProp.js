import React from 'react'
import { Image, Text, View } from 'native-base'

const HubProp = ({ path, title }) => {
  return (
    <View px='16px' py='10px' maxWidth='102px' maxHeight='106px'>
      <Image source={path} size='70px' alt='hubprop' />
      <Text
        textAlign='center'
        mt='10px'
        color='#fff'
        fontSize={14}
        lineHeight={16.71}
        fontFamily={'SourceSansPro_400Regular'}
      >
        {title}
      </Text>
    </View>
  )
}
export default HubProp
