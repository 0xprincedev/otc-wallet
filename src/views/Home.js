import React from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Text,
  Pressable,
} from 'native-base'

import MainButton from '../components/MainButton'

const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor={'#000'}>
        <Image
          alignSelf={'center'}
          source={require('../assets/image/mark.png')}
          size='75px'
          mt='273px'
          alt='mark'
        />
        <Text
          fontSize={36}
          color='#fff'
          fontFamily={'Nunito_400Regular'}
          lineHeight={49.1}
          letterSpacing='6px'
          textAlign='center'
          mt='37.91px'
        >
          <Text fontFamily={'Nunito_700Bold'}>OTC </Text>WALLET
        </Text>
        <Text
          color='#fff'
          textAlign='center'
          fontSize={16}
          fontFamily={'Roboto_500Medium'}
          lineHeight={19.09}
          mt='4px'
        >
          The easiest and most secure digital wallet
        </Text>
        <Pressable
          onPress={() => navigation.navigate('CreateWalletStepone')}
          mt='250px'
          mx='17px'
        >
          <MainButton data='Create a new Wallet' />
        </Pressable>
        <Pressable
          mt='18px'
          mb='85px'
          onPress={() => navigation.navigate('ImportWalletStepOne')}
        >
          <Text
            color='#fff'
            textAlign='center'
            fontSize={18}
            fontFamily={'Nunito_600SemiBold'}
            lineHeight={24.55}
            underline
          >
            Import using seed phrase
          </Text>
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default Home
