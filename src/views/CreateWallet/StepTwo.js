import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import RNFS from 'react-native-fs'
import {
  Checkbox,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  HStack,
  Image,
  Text,
} from 'native-base'

import MainButton from '../../components/MainButton'

const StepTwo = ({ navigation }) => {
  const [checked, setChecked] = useState(false)
  let seeds = [
    'crypto',
    'binance',
    'kingdom',
    'prison',
    'wisp',
    'abandon',
    'what',
    'please',
    'wallet',
    'enable',
    'else',
    'if',
  ]

  // const getSeeds = async() => {
  //   seeds = await axios
  // }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack mt='60px' alignSelf='center'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              alignSelf={'center'}
              source={require('../../assets/image/back.png')}
              size='40px'
              alt='back'
            />
          </Pressable>
          <Image
            source={require('../../assets/image/step1.png')}
            alt='step'
            width='230px'
            mt='15px'
            ml='30px'
            mr='70px'
          />
        </HStack>
        <Text
          fontSize={16}
          color='#62C9E8'
          lineHeight={24}
          fontFamily={'OpenSans_600SemiBold'}
          textAlign='center'
          mt='14px'
          mx='44px'
        >
          Backup Wallet
        </Text>
        <Image
          source={require('../../assets/image/backup.png')}
          alt='logo'
          width='229px'
          height='251px'
          alignSelf='center'
        />
        <Text
          color='#7D8EA0'
          mt='60px'
          mx='44px'
          fontSize={14}
          lineHeight={24}
          fontFamily={'Inter_400Regular'}
        >
          Don't risk losing your funds. protect your wallet by saving your Seed
          phrase in a place you trust.
        </Text>
        <Text
          color='#7D8EA0'
          mx='44px'
          fontSize={14}
          lineHeight={24}
          fontFamily={'Inter_400Regular'}
          mt='8px'
        >
          It's the only way to recover your wallet if you get locked out of the
          app or get a new device.
        </Text>
        <HStack mt='32px' alignSelf='center' mx='56px'>
          <Checkbox
            size={'md'}
            isChecked={checked}
            onChange={() => setChecked(!checked)}
            colorScheme={'indigo'}
          >
            {''}
          </Checkbox>
          <Text
            fontSize={14}
            fontFamily={'Roboto_400Regular'}
            lineHeight={24}
            color='#fff'
          >
            I understand that if I loose my recovery phrase, I will not be able
            to access my account
          </Text>
        </HStack>
        <Pressable
          mt='8px'
          mx='17px'
          onPress={() =>
            navigation.navigate('CreateWalletStepThree', { seeds: seeds })
          }
        >
          <MainButton data={'Backup Wallet'} />
        </Pressable>
        <Pressable
          isDisabled={!checked}
          mt='32px'
          mb='39px'
          alignSelf='center'
          width='132px'
          onPress={() => navigation.navigate('MyWallet')}
        >
          <Text
            fontSize={16}
            lineHeight={24}
            fontFamily={'Inter_700Bold'}
            color='#5F97FF'
            textAlign='center'
          >
            Remind Me Later
          </Text>
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default StepTwo
