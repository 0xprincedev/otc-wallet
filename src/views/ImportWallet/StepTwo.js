import React, { useState } from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  HStack,
  VStack,
  Image,
  Pressable,
  View,
  FormControl,
  Text,
  Switch,
} from 'native-base'

import Password from '../../components/Password'
import MainButton from '../../components/MainButton'

const seed =
  'then vacant hub ride avoid girl alien cross usage exist comic upon'

const ImportWalletStepTwo = ({ navigation }) => {
  const [checked, setChecked] = useState(true)
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack marginTop='50' alignSelf='center' alignItems='center'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              alignSelf={'center'}
              source={require('../../assets/image/back.png')}
              size='40px'
              alt='back'
            />
          </Pressable>
          <Text
            fontWeight='500'
            textAlign='center'
            fontSize={16}
            lineHeight={24}
            width='230px'
            ml='30px'
            mr='70px'
            color='#fff'
          >
            Import From Seed
          </Text>
        </HStack>
        <FormControl
          flexDirection='row'
          width='327px'
          alignSelf='center'
          mt='24px'
        >
          <View
            width='255px'
            borderRadius='16px'
            borderWidth='1px'
            borderColor='#181E25'
            mr='auto'
          >
            <HStack>
              <VStack mr='auto' ml='16px' my='12px'>
                <Text
                  color='#6A84A0'
                  fontFamily={'Nunito_600SemiBold'}
                  fontSize={12}
                  lineHeight={16}
                >
                  Seed Phrase
                </Text>
                <Text
                  width='173px'
                  fontFamily={'Nunito_600SemiBold'}
                  fontSize={14}
                  lineHeight={24}
                  color='#fff'
                >
                  {seed}
                </Text>
              </VStack>
              <Pressable>
                <Image
                  source={require('../../assets/image/eye.png')}
                  size='24px'
                  alt='eye'
                  mr='16px'
                  mt='20px'
                />
              </Pressable>
            </HStack>
          </View>
          <Pressable onPress={() => navigation.navigate('ImportWalletQrOne')}>
            <Image
              source={require('../../assets/image/qr.png')}
              size='24px'
              alt='QR'
              mr='16px'
              mt='20px'
            />
          </Pressable>
        </FormControl>
        <View mt='20px' width='327px' alignSelf='center'>
          <Password />
        </View>
        <FormControl
          px='16px'
          mt='139px'
          width='343px'
          flexDirection='row'
          alignSelf='center'
          py='8px'
        >
          <Text
            mr='auto'
            fontFamily={'Roboto_500Medium'}
            fontSize={16}
            lineHeight={24}
            color='#fff'
          >
            Sign with Face ID?
          </Text>
          <View
            backgroundColor={checked == true ? '#3E3BDA' : '#a1a1aa'}
            width='64px'
            height='32px'
            borderRadius='16px'
            justifyContent='center'
            alignItems='center'
          >
            <Switch
              onTrackColor='#3e3bda'
              onThumbColor='#fff'
              size='lg'
              isChecked={checked}
              onValueChange={() => setChecked(!checked)}
            />
          </View>
        </FormControl>
        <Text
          width='319px'
          color='#8FA2B7'
          fontFamily={'Archivo_400Regular'}
          fontSize={14}
          lineHeight={24}
          alignSelf='center'
          mt='25px'
        >
          By proceeding, you agree to these{' '}
          <Text color='#5F97FF'>Term and Conditions.</Text>
        </Text>
        <Pressable
          my='80px'
          mx='17px'
          onPress={() => navigation.navigate('MyWallet')}
        >
          <MainButton data={'Import Wallet'} />
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default ImportWalletStepTwo
