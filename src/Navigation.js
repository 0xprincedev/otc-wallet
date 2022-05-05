import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createStackNavigator } from '@react-navigation/stack'

import Home from './views/Home'
import CreateWalletStepOne from './views/CreateWallet/StepOne'
import CreateWalletStepTwo from './views/CreateWallet/StepTwo'
import CreateWalletStepThree from './views/CreateWallet/StepThree'
import CreateWalletStepFour from './views/CreateWallet/StepFour'
import ImportWalletStepOne from './views/ImportWallet/StepOne'
import ImportWalletStepTwo from './views/ImportWallet/StepTwo'
import ImportWalletQrOne from './views/ImportWallet/QrOne'
import ImportWalletQrTwo from './views/ImportWallet/QrTwo'
import MyWallet from './views/MyWallet'

import MyHub from './views/MyHub'
import Send from './views/Send'
import ConfirmSend from './views/ConfirmSend'
import Swap from './views/Swap'
import NftGallery from './views/NftGallery'
import NftDetail from './views/NftDetail'
import NftSend from './views/NftSend'
import NftImport from './views/NftImport'

import AddAsset from './views/AddAsset'
import Notification from './views/Notification'
import Portfolio from './views/Portfolio'
import Setting from './views/Setting'
import Support from './views/Support'
import Security from './views/Security'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='CreateWalletStepone'
          component={CreateWalletStepOne}
        />
        <Stack.Screen
          name='CreateWalletStepTwo'
          component={CreateWalletStepTwo}
        />
        <Stack.Screen
          name='CreateWalletStepThree'
          component={CreateWalletStepThree}
        />
        <Stack.Screen
          name='CreateWalletStepFour'
          component={CreateWalletStepFour}
        />
        <Stack.Screen
          name='ImportWalletStepOne'
          component={ImportWalletStepOne}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name='ImportWalletStepTwo'
          component={ImportWalletStepTwo}
        />
        <Stack.Screen name='ImportWalletQrOne' component={ImportWalletQrOne} />
        <Stack.Screen name='ImportWalletQrTwo' component={ImportWalletQrTwo} />
        <Stack.Screen name='MyWallet' component={MyWallet} />
        <Stack.Screen
          name='Send'
          component={Send}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen name='ConfirmSend' component={ConfirmSend} />
        <Stack.Screen
          name='Swap'
          component={Swap}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen name='NftGallery' component={NftGallery} />
        <Stack.Screen name='NftDetail' component={NftDetail} />
        <Stack.Screen name='NftSend' component={NftSend} />
        <Stack.Screen name='NftImport' component={NftImport} />
        <Stack.Screen
          name='AddAsset'
          component={AddAsset}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name='Notification'
          component={Notification}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name='Portfolio'
          component={Portfolio}
          options={{ animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name='MyHub'
          component={MyHub}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='Support' component={Support} />
        <Stack.Screen name='Security' component={Security} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
