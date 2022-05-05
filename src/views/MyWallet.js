import React, { useState, useEffect } from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  HStack,
  FlatList,
  Box,
} from 'native-base'
import { StyleSheet, LogBox } from 'react-native'
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
    percent: '-1.5',
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
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  const makeTabBar = () => {
    let data = (
      <HStack mx='39px' mt='22px' mb='20px'>
        <Pressable
          onPress={() => setTab(false)}
          pl='8px'
          borderBottomWidth={tab == false ? 2 : 1}
          borderBottomColor={tab == false ? '#3878D4' : '#fff'}
          width='50%'
        >
          <Text
            color={tab == false ? '#3878D4' : '#fff'}
            style={styles.viewAreaTitle}
          >
            TOKENS
          </Text>
        </Pressable>
        <Pressable
          width='50%'
          pr='8px'
          borderBottomWidth={tab == true ? 2 : 1}
          borderBottomColor={tab == true ? '#3878D4' : '#fff'}
          onPress={() => navigation.navigate('NftGallery')}
        >
          <Text
            color={tab == true ? '#3878D4' : '#fff'}
            style={styles.viewAreaTitle}
            textAlign='right'
          >
            NFT's
          </Text>
        </Pressable>
      </HStack>
    )
    return data
  }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000' nestedScrollEnabled={true}>
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
        <Pressable mt='40px' onPress={() => navigation.navigate('Portfolio')}>
          <MultiSlider data={sliderData} />
        </Pressable>
        <Text mt='20px' style={styles.portValue}>
          PORTFOLIO VALUE
        </Text>
        {makeTabBar()}
        {tab == false ? (
          <View flex={1}>
            {/* {makeTokenList()} */}
            <FlatList
              data={sliderData}
              renderItem={({ item }) => (
                <Token data={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            />
            <Pressable
              height='65px'
              mx='7px'
              borderRadius='12px'
              borderWidth='0.5px'
              borderColor='#313131'
              mt='16px'
              mb='33px'
              justifyContent='center'
              onPress={() => navigation.navigate('AddAsset')}
            >
              <Text style={styles.addAsset}>Add Assets</Text>
            </Pressable>
          </View>
        ) : (
          <View backgroundColor='#fff' flex={1}></View>
        )}
        {/* <View backgroundColor='#fff' flex={1}></View> */}
        {/* </Swiper> */}
      </ScrollView>
      <NavBar navigation={navigation} />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  portValue: {
    fontFamily: 'OpenSans_400Regular',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 21.58,
  },
  viewAreaTitle: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 18,
    lineHeight: 21.58,
  },
  addAsset: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    lineHeight: 21.78,
    color: '#fff',
    textAlign: 'center',
  },
})
export default MyWallet
