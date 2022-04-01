import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import { View, Text } from 'native-base'

const MultiSlider = ({ data }) => {
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
    <View width='250px' height='250px' borderRadius='125px'>
      <View style={[{ alignItems: 'center', justifyContent: 'center' }]}>
        <Svg
          height='250'
          width='250'
          viewBox='-1 -1 2 2'
          style={{ transform: [{ rotate: '-90deg' }] }}
        >
          {makeSlider()}
        </Svg>
        <View mt='-250px'>
          <Svg height='250' width='250'>
            <Circle cx='125' cy='125' r='123' fill='black' />
          </Svg>
        </View>
      </View>
      <Text
        mt='-153px'
        color='#fff'
        textAlign='center'
        fontFamily={'OpenSans_400Regular'}
        fontSize={24}
        lineHeight={57.54}
      >
        $
        <Text fontSize={48} lineHeight={57.54} fontFamily={'Nunito_400Regular'}>
          {parseInt(total)}
        </Text>
        .{(total - parseInt(total)).toFixed(2) * 100}
      </Text>
    </View>
  )
}

export default MultiSlider
