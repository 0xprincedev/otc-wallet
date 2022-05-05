import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { ImageBackground } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { Image, View, Pressable, HStack, VStack } from 'native-base'

const { Width } = Dimensions.get('window')

const NavBar = ({ navigation }) => {
  const [state, setState] = useState(false)

  const makeMenu = () => {
    let menu
    if (!state) {
      menu = (
        <Pressable
          position='absolute'
          bottom='48px'
          alignSelf='center'
          onPress={() => setState(!state)}
        >
          <Image
            source={require('../assets/image/menu.png')}
            size='64px'
            borderRadius='32px'
            alt='menu'
          />
        </Pressable>
      )
      return menu
    }
    menu = (
      <HStack position='absolute' bottom='48px' alignSelf='center'>
        <Pressable mr='15px' mt='44px'>
          <Image
            source={require('../assets/image/receivemenu.png')}
            size='64px'
            borderRadius='32px'
            alt='receive'
          />
        </Pressable>
        <VStack>
          <Pressable onPress={() => navigation.navigate('Send')} mb='27px'>
            <Image
              source={require('../assets/image/sendmenu.png')}
              size='64px'
              borderRadius='32px'
              alt='receive'
            />
          </Pressable>
          <Pressable onPress={() => setState(!state)}>
            <Image
              source={require('../assets/image/closemenu.png')}
              size='64px'
              borderRadius='32px'
              alt='receive'
            />
          </Pressable>
        </VStack>
        <Pressable
          onPress={() => navigation.navigate('Swap')}
          ml='15px'
          mt='44px'
        >
          <Image
            source={require('../assets/image/swapmenu.png')}
            size='64px'
            borderRadius='32px'
            alt='receive'
          />
        </Pressable>
      </HStack>
    )
    return menu
  }

  return (
    <>
      <View backgroundColor='#000'>
        <Image
          source={require('../assets/image/navback.png')}
          alt='navbar'
          width={Width}
          height='80px'
        />
        <Pressable position='absolute' top='25px' left='30px'>
          <Image
            source={require('../assets/image/detail.png')}
            size='34px'
            alt='detail'
          />
        </Pressable>
        <Pressable
          position='absolute'
          top='28px'
          right='40px'
          onPress={() => navigation.navigate('MyHub')}
        >
          <Image
            source={require('../assets/image/hub.png')}
            size='30px'
            alt='detail'
          />
        </Pressable>
      </View>
      {makeMenu()}
    </>
  )
}
export default NavBar
