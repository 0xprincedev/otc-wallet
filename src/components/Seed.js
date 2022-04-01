import React from 'react'
import { Text } from 'native-base'

const Seed = ({ order, word }) => {
  return (
    <Text
      color='#5290E7'
      fontSize={18.93}
      lineHeight={25.82}
      fontFamily={'Nunito_400Regular'}
      my='4px'
      width='105px'
    >
      {order}.<Text color='#000'>{word}</Text>
    </Text>
  )
}
export default Seed
