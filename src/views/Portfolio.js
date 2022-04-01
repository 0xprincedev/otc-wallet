import React from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Pressable,
  HStack,
  Image,
  View,
} from 'native-base'

import NavBar from '../components/NavBar'
import PortSlider from '../components/PortSlider'

let sliderData = [
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

const Portfolio = ({ navigation }) => {
  const makeAsset = () => {
    let data = []
    for (let i = 0; i < sliderData.length; i++) {
      let item = (
        <HStack key={i} height='48px' mb='24px' alignItems='center'>
          <Image
            source={require('../assets/image/coin.png')}
            size='30px'
            alt='coin logo'
          />
          <Text
            ml='12px'
            fontFamily={'Inter_500Medium'}
            fontSize={16}
            lineHeight={19.36}
            color='#fff'
            mr='auto'
          >
            {sliderData[i].name}
          </Text>
          <View>
            <Text
              ml='auto'
              fontFamily={'OpenSans_400Regular'}
              fontSize={14}
              lineHeight={16.41}
              color='#fff'
            >
              USD {(sliderData[i].stock * sliderData[i].price).toFixed(2)}
            </Text>
            <Text
              ml='auto'
              fontFamily={'OpenSans_400Regular'}
              fontSize={14}
              lineHeight={16.41}
              color='#7D7D7D'
              mt='12px'
            >
              {sliderData[i].stock} {sliderData[i].unit}
            </Text>
          </View>
        </HStack>
      )
      data.push(item)
    }
    return data
  }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack alignSelf='center' mt='60px'>
          <Pressable mr='40px' onPress={() => navigation.goBack()}>
            <Image
              size='18px'
              source={require('../assets/image/close.png')}
              alt='close'
            />
          </Pressable>
          <Text
            fontFamily={'Roboto_500Medium'}
            fontSize={18}
            lineHeight={21.48}
            color='#fff'
            textAlign='center'
            width='200px'
          >
            YOUR PORTFOLIO
          </Text>
          <Pressable onPress={() => navigation.navigate('Notification')}>
            <Image
              size='20px'
              source={require('../assets/image/notification.png')}
              alt='close'
              ml='40px'
            />
          </Pressable>
        </HStack>
        <View mt='20px' ml='28px'>
          <PortSlider data={sliderData} />
        </View>
        <HStack mx='30px' mt='30px'>
          <Text
            mr='auto'
            fontFamily={'Inter_500Medium'}
            fontSize={18}
            lineHeight={21.78}
            color='#fff'
          >
            Your Assets
          </Text>
          <Text
            ml='auto'
            fontFamily={'Inter_400Regular'}
            fontSize={18}
            lineHeight={21.78}
            color='#fff'
          >
            Balance
          </Text>
        </HStack>
        <View mx='30px' mt='21px'>
          {makeAsset()}
        </View>
      </ScrollView>
      <NavBar />
    </NativeBaseProvider>
  )
}

export default Portfolio
