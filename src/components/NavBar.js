import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { ImageBackground } from 'react-native'
import { Image, View, Pressable, HStack } from 'native-base'

const { Width } = Dimensions.get('window')

const NavBar = ({ navigation }) => {
  const [state, setState] = useState(false)

  const makeMenu = () => {
    let menu

    if (!state) {
      menu = (
        <Pressable onPress={() => setState(!state)} borderRadius='32px'>
          <Image
            source={require('../assets/image/menu.png')}
            size='64px'
            alt='menu'
            mt='-32px'
            alignSelf='center'
            key={1}
          />
        </Pressable>
      )
      return menu
    }
    menu = (
      <>
        <HStack mt='-127px' alignSelf='center'>
          <Image
            source={require('../assets/image/receivemenu.png')}
            size='64px'
            alt='menu'
            alignSelf='center'
            key={3}
            mr='13px'
            mt='20px'
          />
          <Image
            source={require('../assets/image/sendmenu.png')}
            size='64px'
            alt='menu'
            alignSelf='center'
            key={4}
            mb='60px'
          />
          <Image
            source={require('../assets/image/swapmenu.png')}
            size='64px'
            mt='20px'
            alt='menu'
            ml='13px'
            alignSelf='center'
            key={5}
          />
        </HStack>
        <Pressable onPress={() => setState(!state)} borderRadius='32px'>
          <Image
            source={require('../assets/image/closemenu.png')}
            size='64px'
            alt='menu'
            mt='-29px'
            alignSelf='center'
            key={4}
          />
        </Pressable>
      </>
    )
    return menu
  }
  useEffect(() => {})

  return (
    <View backgroundColor='#000'>
      <ImageBackground
        source={require('../assets/image/navback.png')}
        style={{ width: Width, height: 80 }}
      >
        {makeMenu()}
        <HStack mt='-9px'>
          <Pressable mr='auto' ml='30px'>
            <Image
              source={require('../assets/image/detail.png')}
              size='32px'
              alt='detail'
            ></Image>
          </Pressable>
          <Pressable mr='30px' onPress={() => navigation.navigate('MyHub')}>
            <Image
              source={require('../assets/image/hub.png')}
              size='30px'
              alt='detail'
            ></Image>
          </Pressable>
        </HStack>
      </ImageBackground>
    </View>
  )
}
export default NavBar
