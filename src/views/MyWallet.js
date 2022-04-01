import React, { useState, useEffect } from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  HStack,
} from 'native-base'
import Swiper from 'react-native-swiper'

import MultiSlider from '../components/MultiSlider'
import Token from '../components/Token'
import NavBar from '../components/NavBar'

let sliderData = [
  {
    name: 'Bitcoin',
    uri: '',
    price: '41000',
    percent: '3.5',
    stock: '0.035',
    color: '#F7931A',
  },
  {
    name: 'XRP',
    uri: '',
    price: '0.34',
    percent: '1.5',
    stock: '1340.2',
    color: '#50AF95',
  },
  {
    name: 'Litecoin',
    uri: '',
    price: '109.29',
    percent: '4.3',
    stock: '5.3432',
    color: '#345D9D',
  },
  {
    name: 'USDT',
    uri: '',
    price: '1.003',
    percent: '0.001',
    stock: '923.13',
    color: '#3EC1BE',
  },
]

const MyWallet = ({ navigation }) => {
  const [tab, setTab] = useState(false)

  const makeTabBar = () => {
    let data = (
      <HStack mx='39px' mt='22px' mb='20px'>
        <Pressable
          // onPress={() => setTab(false)}
          pl='8px'
          borderBottomWidth={tab == false ? 2 : 1}
          borderBottomColor={tab == false ? '#3878D4' : '#fff'}
          width='50%'
        >
          <Text
            color={tab == false ? '#3878D4' : '#fff'}
            fontFamily={'OpenSans_400Regular'}
            fontSize={18}
            lineHeight={21.58}
          >
            TOKENS
          </Text>
        </Pressable>
        <Pressable
          // onPress={() => setTab(true)}
          width='50%'
          pr='8px'
          borderBottomWidth={tab == true ? 2 : 1}
          borderBottomColor={tab == true ? '#3878D4' : '#fff'}
        >
          <Text
            color={tab == true ? '#3878D4' : '#fff'}
            fontFamily={'OpenSans_400Regular'}
            fontSize={18}
            lineHeight={21.58}
            textAlign='right'
          >
            NFT's
          </Text>
        </Pressable>
      </HStack>
    )
    return data
  }
  const makeTokenList = () => {
    let data = []
    for (let i = 0; i < sliderData.length; i++) {
      data.push(
        <View
          mx='17px'
          mt='20px'
          borderBottomWidth={'2px'}
          key={i}
          borderColor='#fff2'
        >
          <Token data={sliderData[i]} />
        </View>
      )
    }
    return data
  }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <Pressable
          onPress={() => navigation.navigate('Notification')}
          mt='66px'
          ml='28px'
        >
          <Image
            source={require('../assets/image/notification.png')}
            size='20px'
            alt='notify'
          />
        </Pressable>
        <Pressable
          alignItems='center'
          mt='40px'
          onPress={() => navigation.navigate('Portfolio')}
        >
          <MultiSlider data={sliderData} />
        </Pressable>
        <Text
          mt='20px'
          fontFamily={'OpenSans_400Regular'}
          color='#fff'
          textAlign='center'
          fontSize={18}
          lineHeight={21.58}
        >
          PORTFOLIO VALUE
        </Text>
        {makeTabBar()}
        <Swiper
          showsPagination={false}
          loop={false}
          onIndexChanged={() => {
            setTab(!tab)
          }}
          height={'100%'}
          // index={tab == true ? 1 : 0}
        >
          <View flex={1}>
            {makeTokenList()}
            <Pressable
              height='65px'
              mx='7px'
              borderRadius='12px'
              borderWidth='0.5px'
              borderColor='#313131'
              mt='16px'
              mb='33px'
              justifyContent='center'
            >
              <Text
                fontFamily={'Inter_400Regular'}
                fontSize={18}
                lineHeight={21.78}
                color='#fff'
                textAlign='center'
              >
                Add Assets
              </Text>
            </Pressable>
          </View>
          <View backgroundColor='#fff' flex={1}></View>
        </Swiper>
      </ScrollView>
      <NavBar navigation={navigation} />
    </NativeBaseProvider>
  )
}
export default MyWallet
