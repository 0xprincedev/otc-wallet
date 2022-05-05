import React, { useState } from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  HStack,
  Image,
  Pressable,
  Text,
} from 'native-base'

import MainButton from '../../components/MainButton'

const ImportWalletQrTwo = ({ navigation }) => {
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
            Scan QR Code
          </Text>
        </HStack>
        <Text
          width='327px'
          textAlign='center'
          alignSelf='center'
          mt='15px'
          color='#8FA2B7'
          fontFamily={'Nunito_400Regular'}
          fontSize={14}
          lineHeight={24}
        >
          Your QR Code has been scanned sucessfuly and wallet has been synced.
        </Text>
        <Image
          source={require('../../assets/image/backupcomplete.png')}
          alt='backup'
          width='310px'
          height='254px'
          mt='178px'
          alignSelf='center'
        />
        <Pressable
          mt='166px'
          mb='95px'
          mx='17px'
          onPress={() => navigation.navigate('MyWallet')}
        >
          <MainButton data={'Go to My Wallet'} />
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default ImportWalletQrTwo
