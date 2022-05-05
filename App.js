import React, { useState, useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import { NativeBaseProvider, Text, View } from 'native-base'

import {
  useFonts,
  Nunito_700Bold,
  Nunito_600SemiBold,
  Nunito_500Medium,
  Nunito_400Regular,
  Roboto_700Bold, //SF Compact
  Roboto_500Medium,
  Roboto_400Regular,
  Archivo_700Bold,
  Archivo_600SemiBold,
  Archivo_500Medium,
  Archivo_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  SourceSansPro_700Bold, //SF pro
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  OpenSans_700Bold, //Futura
  OpenSans_600SemiBold,
  OpenSans_500Medium,
  OpenSans_400Regular,
} from '@expo-google-fonts/dev'

import Navigation from './src/Navigation'
import StatusNav from './src/components/StatusNav'

const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_500Medium,
    Nunito_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Archivo_500Medium,
    Archivo_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_400Regular,
    OpenSans_700Bold,
    OpenSans_600SemiBold,
    OpenSans_500Medium,
    OpenSans_400Regular,
  })
  const loadFont = () => {
    for (let i = 0; i < 10000000; i++) {}
    return (
      <>
        <StatusNav />
        <Navigation />
      </>
    )
  }

  return <NativeBaseProvider>{loadFont()}</NativeBaseProvider>
}
export default App
