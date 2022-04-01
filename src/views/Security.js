import React from 'react'
import { ImageBackground } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Pressable,
  View,
} from 'native-base'
import { Dimensions } from 'react-native'

import SubProfile from '../components/SubProfile'

const Width = Dimensions.get('window').width

const Security = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#03031E'>
        <ImageBackground
          source={require('../assets/image/security_title.png')}
          alt='title'
          style={{ width: Width, height: 300 }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/image/back2.png')}
              alt='back'
              size='28px'
              mt='56px'
              ml='16px'
            />
          </Pressable>
        </ImageBackground>
        <View my='22px'>
          <SubProfile
            path={require('../assets/image/backupwallet.png')}
            title='Backup Wallet'
            info='Secure your wallet with your secret 12 word recovery
            phrase, This is the only way to acces a lost walet.'
          />
          <SubProfile
            path={require('../assets/image/securepin.png')}
            title='Secure with Pin'
            toggle={true}
            info='Keep your assets safe with a passcode, this passcode
            will ONLY be stored on your device.'
          />
          <SubProfile
            path={require('../assets/image/securepin.png')}
            title='Secure with Face ID'
            toggle={true}
            info='Keep your assets safe with a passcode, this passcode
            will ONLY be stored on your device.'
          />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default Security
