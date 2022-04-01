import React, { useState } from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  HStack,
  Image,
  Pressable,
  Text,
} from 'native-base'

const ImportWalletQrOne = ({ navigation }) => {
  const [checked, setChecked] = useState(true)
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
        <Text
          width='327px'
          textAlign='center'
          alignSelf='center'
          color='#8FA2B7'
          fontSize={14}
          lineHeight={24}
          fontFamily={'Nunito_400Regular'}
          mt='24px'
        >
          Please hold the appropriate QR Code upto the camera.
        </Text>
        <Image
          source={require('../../assets/image/qrcode.png')}
          size='350px'
          alt='qrcode'
          alignSelf='center'
          mt='98px'
        />
        <Pressable
          onPress={() => navigation.navigate('ImportWalletQrTwo')}
          width='98px'
          alignSelf='center'
        >
          <Text
            textAlign='center'
            color='#fff'
            fontSize={20}
            lineHeight={125}
            fontFamily={'Nunito_600SemiBold'}
          >
            Scanning...
          </Text>
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default ImportWalletQrOne
