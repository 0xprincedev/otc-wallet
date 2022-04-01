import React, { useState } from 'react'
import {
  NativeBaseProvider,
  Pressable,
  ScrollView,
  HStack,
  Image,
  Text,
  View,
  FormControl,
  Badge,
} from 'native-base'

import MainButton from '../../components/MainButton'

let seedList = [
  'call',
  'waht',
  'please',
  'enable',
  'talk',
  'orphan',
  'rose',
  'either',
  'kingdom',
  'what',
  'exhaust',
  'please',
]

let clickedList = []
let k = 0

const StepFour = ({ navigation }) => {
  const [re, setRe] = useState()
  const addSeed = (i) => {
    clickedList.push(seedList[i])
    seedList.splice(i, 1)
    setRe(++k)
  }
  const deleteSeed = (i) => {
    seedList.push(clickedList[i])
    clickedList.splice(i, 1)
    setRe(++k)
  }

  const makeSeedList = () => {
    let seeds = []
    for (let i = 0; i < seedList.length; i++) {
      seeds.push(
        <Pressable onPress={() => addSeed(i)}>
          <Badge
            mx='8px'
            my='9px'
            borderRadius='4px'
            borderColor='#fff'
            backgroundColor='#000'
            key={i}
          >
            <Text
              fontFamily={'Nunito_400Regular'}
              fontSize={16}
              lineHeight={24}
              color='#fff'
            >
              {seedList[i]}
            </Text>
          </Badge>
        </Pressable>
      )
    }
    return seeds
  }
  const makeClickedList = () => {
    let clicked = []
    for (let i = 0; i < clickedList.length; i++) {
      clicked.push(
        <Pressable onPress={() => deleteSeed(i)}>
          <Badge
            mx='8px'
            my='9px'
            borderRadius='4px'
            borderColor='#4D4D4D'
            backgroundColor='#fff'
            key={i}
          >
            <Text
              fontFamily={'Nunito_400Regular'}
              fontSize={16}
              lineHeight={24}
              color='#4D4D4D'
            >
              {clickedList[i]}
            </Text>
          </Badge>
        </Pressable>
      )
    }
    return clicked
  }
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack mt='60' alignSelf='center'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              alignSelf={'center'}
              source={require('../../assets/image/back.png')}
              size='40px'
              alt='back'
            />
          </Pressable>
          <Image
            source={require('../../assets/image/step3.png')}
            alt='step'
            width='230px'
            mt='15px'
            ml='30px'
            mr='70px'
          />
        </HStack>
        <Text
          fontSize={16}
          color='#62C7E9'
          lineHeight={24}
          fontFamily={'Roboto_600SemiBold'}
          textAlign='center'
          mt='14px'
        >
          Select Words In the Correct Order
        </Text>
        <Text
          color='#7D8EA0'
          mx='44px'
          fontSize={14}
          lineHeight={24}
          fontFamily={'Roboto_400Regular'}
          marginTop='11px'
          textAlign='center'
        >
          Please select the words in the correct order as was displayed
          previously.
        </Text>
        <FormControl
          width='375px'
          mt='17px'
          height='150px'
          alignSelf='center'
          backgroundColor='#fff'
          borderRadius='8px'
          alignItems='center'
          flexWrap='wrap'
          flexDirection='row'
          py='3px'
          px='6px'
        >
          {makeClickedList()}
        </FormControl>
        <View
          alignSelf='center'
          width='375'
          flexDirection='row'
          mt='7px'
          px='6px'
          flexWrap='wrap'
        >
          {makeSeedList()}
        </View>
        {seedList.length == 0 ? (
          <Pressable
            mt='380px'
            mb='90px'
            mx='17px'
            onPress={() => navigation.navigate('MyWallet')}
          >
            <MainButton data={'Complete Back Up'} />
          </Pressable>
        ) : null}
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default StepFour
