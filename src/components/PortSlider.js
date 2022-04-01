import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import { View, Text, Image, HStack } from 'native-base'

const PortSlider = ({ data }) => {
  let total = 0
  let dollars = []
  for (let i = 0; i < data.length; i++) {
    dollars[i] = data[i].price * data[i].stock
    total += dollars[i]
  }
  const makeSlider = () => {
    let slices = []

    for (let i = 0; i < data.length; i++) {
      slices.push({ percent: dollars[i] / total, color: data[i].color })
    }
    //option 1  Equal size pieces

    let cumulativePercent = 0

    function getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent)
      const y = Math.sin(2 * Math.PI * percent)
      return [x, y]
    }

    let arr = []
    arr = slices.map((slice) => {
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent)
      cumulativePercent += slice.percent
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent)
      const largeArcFlag = slice.percent > 0.5 ? 1 : 0
      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        'L 0 0', // Line
      ].join(' ')
      return <Path d={pathData} fill={slice.color} key={pathData} />
    })
    return arr
  }

  return (
    <HStack alignItems='center'>
      <View height='100px'>
        <Svg
          height='100'
          width='100'
          viewBox='-1 -1 2 2'
          style={{ transform: [{ rotate: '-90deg' }] }}
        >
          {makeSlider()}
        </Svg>
        <View
          width='98px'
          height='98px'
          backgroundColor='#000'
          borderRadius='50px'
          mt='-99px'
          ml='1px'
        ></View>
        <Image
          source={require('../assets/image/portasset.png')}
          width='82.5px'
          height='82.5px'
          mt='-90.25px'
          ml='8.75px'
          borderRadius='50px'
          alt='asset'
        />
      </View>
      <View height='50px' ml='20px'>
        <Text
          fontFamily={'Inter_400Regular'}
          fontSize={14}
          lineHeight={16.94}
          color='#fff'
          mb='auto'
        >
          Your Balance
        </Text>
        <Text
          fontFamily={'OpenSans_400Regular'}
          fontSize={24}
          lineHeight={28.77}
          color='#fff'
        >
          USD {total.toFixed(2)}
        </Text>
      </View>
    </HStack>
  )
}

export default PortSlider
