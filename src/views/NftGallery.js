import React from 'react'
import Swiper from 'react-native-swiper'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Image,
  HStack,
  Pressable,
  View,
} from 'native-base'
import NftCard from '../components/NftCard'

let nftData = [
  {
    title: 'Bored Ape Chem Club',
    info: [
      { name: 'Degen Ape', url: '../assets/image/nft.png' },
      { name: 'Bored Ape', url: '../assets/image/nft1.png' },
      { name: 'Degen Ape', url: '../assets/image/nft2.png' },
      { name: 'Degen Ape', url: '../assets/image/nft3.png' },
    ],
  },
  {
    title: 'Bored Ape Chem Club',
    info: [
      { name: 'Degen Ape', url: '../assets/image/nft4.png' },
      { name: 'Degen Ape', url: '../assets/image/nft1.png' },
      { name: 'Degen Ape', url: '../assets/image/nft3.png' },
    ],
  },
  {
    title: 'Bored Ape Chem Club',
    info: [
      { name: 'Degen Ape', url: '../assets/image/nft1.png' },
      { name: 'Degen Ape', url: '../assets/image/nft.png' },
      { name: 'Degen Ape', url: '../assets/image/nft4.png' },
    ],
  },
]

const NftGallery = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView bg='#000'>
        <HStack alignSelf='center' mt='60px'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/image/back2.png')}
              alt='back'
              size='28px'
            />
          </Pressable>
          <Text style={styles.title} ml='56px' mr='84px'>
            Your Collectibles
          </Text>
        </HStack>
        {nftData.map((item) => (
          <>
            <Text style={styles.subtitle} ml='25px'>
              {item.title}
            </Text>
            <View
              flexWrap='wrap'
              flexDirection='row'
              justifyContent='space-between'
              px='20px'
            >
              {item.info.map((subItem) => (
                <Pressable onPress={() => navigation.navigate('NftDetail')}>
                  <NftCard
                    name={subItem.name}
                    uri={'../assets/image/nft.png'}
                  />
                </Pressable>
              ))}
            </View>
          </>
        ))}
      </ScrollView>
      <Pressable
        width='56px'
        height='56px'
        borderRadius='28px'
        bg='#2A5FE9'
        position='absolute'
        bottom='30px'
        right='20px'
        shadowColor='#5656564D'
        onPress={() => navigation.navigate('NftImport')}
      >
        <Image
          source={require('../assets/image/plus.png')}
          size='32px'
          alt='plus'
          mt='12px'
          ml='12px'
        />
      </Pressable>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    lineHeight: 21.78,
    color: '#fff',
    width: 200,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    lineHeight: 21.48,
    color: '#fff',
    marginTop: 20,
    marginBottom: 16,
  },
})
export default NftGallery
