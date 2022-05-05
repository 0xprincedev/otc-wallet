import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Image,
  HStack,
  Pressable,
  View,
  Input,
  VStack,
} from 'native-base'

import Asset from '../components/Asset'

let existAsset = [
  {
    name: 'Bitcoin',
    uri: '',
    price: '41000',
    percent: '3.5',
    stock: '0.035',
    color: '#F7931A',
    unit: 'BTC',
  },
  {
    name: 'XRP',
    uri: '',
    price: '0.34',
    percent: '1.5',
    stock: '1340.2',
    color: '#50AF95',
    unit: 'XRP',
  },
  {
    name: 'Litecoin',
    uri: '',
    price: '109.29',
    percent: '4.3',
    stock: '5.3432',
    color: '#345D9D',
    unit: 'LITE',
  },
  {
    name: 'TETHER',
    uri: '',
    price: '2.003',
    percent: '0.001',
    stock: '923.13',
    color: '#3EC1BE',
    unit: 'USDT',
  },
]

const AddAsset = ({ navigation }) => {
  axios({
    method: 'get',
    url: 'https://reqres.in/api/users/1',
  }).then((response) => {
    // console.log(response.data)
  })

  const [searchCrypto, setSearchCrypto] = useState('')

  const existsAssets = () => {
    let data = []
    for (let i = 0; i < existAsset.length; i++) {
      data.push(
        <View key={i} height='48px'>
          <HStack>
            <Image
              source={require('../assets/image/coin.png')}
              alt='coin'
              size='30px'
              mt='9px'
            />
            <Text
              fontFamily={'Inter_500Medium'}
              fontSize={16}
              lineHeight={19.36}
              color='#fff'
              ml='12px'
              mt='13px'
            >
              {existAsset[i].name}
            </Text>
            <VStack ml='auto'>
              <Text
                color='#fff'
                fontFamily={'OpenSans_400Regular'}
                fontSize={14}
                lineHeight={16.41}
                mb='auto'
                ml='auto'
              >
                USD {(existAsset[i].price * existAsset[i].stock).toFixed(2)}
              </Text>
              <Text
                color='#7D7D7D'
                fontFamily={'OpenSans_400Regular'}
                fontSize={14}
                lineHeight={16.41}
                mt='auto'
                ml='auto'
              >
                {existAsset[i].stock + ' ' + existAsset[i].unit}
              </Text>
            </VStack>
          </HStack>
        </View>
      )
    }

    return (
      <View ml='22px' mr='19px' mt='25px'>
        {data}
      </View>
    )
  }

  const availableAssets = () => {
    return <View></View>
  }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack justifyContent='center' mt='60px'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/image/close.png')}
              size='18px'
              alt='*'
            />
          </Pressable>
          <Text
            fontFamily={'Archivo_500Medium'}
            fontSize={18}
            lineHeight={21.94}
            color='#fff'
            width='200px'
            textAlign='center'
            ml='40px'
            mr='58px'
          >
            ASSETS
          </Text>
        </HStack>
        <Text
          mt='26px'
          ml='26px'
          fontFamily={'Archivo_500Medium'}
          fontSize={14}
          lineHeight={17.07}
          color='#fff'
        >
          Available Assets (102)
        </Text>
        <Text
          mt='10px'
          ml='26px'
          fontFamily={'Archivo_500Medium'}
          fontSize={14}
          lineHeight={17.07}
          color='#9E9E9E'
          width='212px'
        >
          Enable assets to view them in your portfolio.
        </Text>
        <View
          mx='27px'
          mt='36px'
          height='50px'
          borderRadius='3px'
          backgroundColor='#EEEEEE26'
        >
          <HStack>
            <Image
              source={require('../assets/image/search.png')}
              size='18px'
              alt='search'
              my='16px'
              mx='18px'
            />
            <Input
              placeholder='Search'
              fontSize={18}
              fontFamily={'Archivo_500Medium'}
              lineHeight={21.07}
              color='#B8B8B8'
              borderWidth='0px'
              width='290px'
              value={searchCrypto}
              onChangeText={(e) => setSearchCrypto(e)}
            />
          </HStack>
        </View>
        {existsAssets()}
        <Text
          mt='21px'
          ml='33px'
          mb='12px'
          fontFamily={'Archivo_700Bold'}
          fontSize={14}
          lineHeight={17.07}
          color='#fff'
        >
          Available Assets (102)
        </Text>
        {availableAssets()}
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default AddAsset
