import React, { useState, useEffect } from 'react'
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

let clicked = []
let cnt = 0
const StepFour = ({ route, navigation }) => {
  let rest = route.params.seeds

  const [k, setK] = useState(cnt)

  const isSame = () => {
    if (clicked.length < 12) return false
    // for (let i = 0; i < 12; i++) {
    //   if (check[i] != clicked[i]) {
    //     return false
    //   }
    // }
    return true
  }

  const addSeed = (i) => {
    clicked.push(rest[i])
    rest.splice(i, 1)
    setK(++cnt)
  }

  const deleteSeed = (i) => {
    rest.push(clicked[i])
    clicked.splice(i, 1)
    setK(++cnt)
  }

  const makeseedList = () => {
    let seed = []
    for (let i = 0; i < rest.length; i++) {
      seed.push(
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
              {rest[i]}
            </Text>
          </Badge>
        </Pressable>
      )
    }
    return seed
  }
  const makeClickedList = () => {
    let list = []
    for (let i = 0; i < clicked.length; i++) {
      list.push(
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
              {clicked[i]}
            </Text>
          </Badge>
        </Pressable>
      )
    }
    return list
  }
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack mt='60' alignSelf='center'>
          <Pressable onPress={() => navigation.navigate('Home')}>
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
          fontFamily={'OpenSans_600SemiBold'}
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
          {makeseedList()}
        </View>
        {isSame() ? (
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
