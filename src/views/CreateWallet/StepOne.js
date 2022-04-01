import React, { useState } from 'react'

import Password from '../../components/Password'
import MainButton from '../../components/MainButton'
import {
  Checkbox,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  HStack,
  Image,
  View,
  Text,
} from 'native-base'

const StepOne = ({ navigation }) => {
  const [checked, setChecked] = useState(false)

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
            source={require('../../assets/image/step1.png')}
            alt='step'
            width='230px'
            mt='15px'
            ml='30px'
            mr='70px'
          />
        </HStack>
        <View mt='24px' mx='44px' alignSelf='center'>
          <Text
            fontSize={16}
            color='#62C7E9'
            lineHeight={24}
            fontFamily={'Roboto_500Medium'}
            textAlign='center'
          >
            Create a Password
          </Text>
          <Text
            fontSize={14}
            color='#8FA2B7'
            lineHeight={24}
            fontFamily={'Roboto_400Regular'}
            textAlign='center'
            mt='8px'
          >
            This password will unlock your On The Coin wallet
          </Text>
        </View>
        <View mt='16px' mx='44px'>
          <Password />
        </View>
        <HStack mx='44px' mt='182px'>
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
            I understand that OTC cannot recover this password for me.{' '}
            <Text color='#5F97FF' underline fontFamily={'Archivo_400Regular'}>
              Learn more
            </Text>
          </Text>
        </HStack>
        <Pressable
          isDisabled={!checked}
          mt='112px'
          mb='66px'
          mx='17px'
          onPress={() => navigation.navigate('CreateWalletStepTwo')}
        >
          <MainButton data={'Next Steps'} />
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default StepOne
