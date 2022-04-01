import React, { useEffect, useState } from 'react'
import { HStack, Text } from 'native-base'
import { StatusBar } from 'react-native'

let k = 0

const StatusNav = () => {
  const [status, setStatus] = useState(0)
  useEffect(() => {
    StatusBar.setHidden(true)
    setInterval(() => {
      setStatus(++k)
    }, 1000)
  }, [])

  const fix = (num) => {
    if (num >= 10) {
      return num
    }
    return '0' + num
  }

  const makeBar = () => {
    let bar = []
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const second = new Date().getSeconds()

    const time = (
      <Text
        color='#fff'
        fontFamily={'Roboto_600SemiBold'}
        fontSize={16.54}
        lineHeight={19.74}
        mr='auto'
        key={1}
      >
        {fix(hour) + ':' + fix(minute) + ':' + fix(second)}
      </Text>
    )
    bar.push(time)
    return bar
  }

  return (
    <>
      <HStack height='30px' backgroundColor='#000' px='25px' py='5px'>
        {makeBar()}
      </HStack>
    </>
  )
}
export default StatusNav
