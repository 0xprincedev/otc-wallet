import React from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Pressable,
  View,
  Text,
} from 'native-base'
import { Dimensions } from 'react-native'

import SubProfile from '../components/SubProfile'

const Width = Dimensions.get('window').width

const Setting = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#03031E'>
        <Pressable onPress={() => navigation.goBack()} mt='60px' ml='30px'>
          <Image
            source={require('../assets/image/back2.png')}
            size='28px'
            alt='close'
          />
        </Pressable>
        <Text
          fontWeight='500'
          fontSize={18}
          lineHeight={21.48}
          textAlign='center'
          color='#fff'
          marginTop='-20px'
          width='100px'
          alignSelf='center'
        >
          Settings
        </Text>
        <Text
          fontSize={16}
          fontWeight='400'
          lineHeight={19.18}
          ml='26px'
          mt='30px'
          color='#7D7D7D'
          mb='6px'
        >
          General
        </Text>
        <SubProfile
          path={require('../assets/image/notifications.png')}
          title='Notifications'
          info='Show a notification when you swap or receive funds.'
          toggle={true}
        />
        <SubProfile
          path={require('../assets/image/currency.png')}
          title='Currency'
          info='You’re able to change your base currency.'
        />
        <Text
          fontSize={16}
          fontWeight='400'
          lineHeight={19.18}
          ml='26px'
          mt='8px'
          mb='8px'
          color='#7D7D7D'
        >
          Advanced
        </Text>
        <SubProfile
          path={require('../assets/image/portfolios.png')}
          title='Portfolios'
          info='Create and manage multiple portfoilos in your wallet.'
          toggle={true}
        />
        <SubProfile
          path={require('../assets/image/syncdevices.png')}
          title='Sync Devices'
          info='Setup access to your funds on multiple devices.'
        />
        <SubProfile
          path={require('../assets/image/restorewallet.png')}
          title='Restore Wallet'
          info='Import & Override your current OTC wallet using your 
          secret seed code.'
        />
        <SubProfile
          path={require('../assets/image/deletewallet.png')}
          title='Delete Wallet'
          info='Delete current OTC wallet. Import exisitng or create 
          new OTC wallet.'
        />
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default Setting
