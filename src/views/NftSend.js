import React from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Pressable,
  Text,
  HStack,
  View,
  Input,
  Divider,
} from 'native-base'
import MainButton from '../components/MainButton'
import NftProp from '../components/NftProp'

const NftDetail = ({ navigation }) => {
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
            Send NFT
          </Text>
        </HStack>
        <View alignSelf='center' mt='35px'>
          <Text textAlign='center' style={styles.asset}>
            ASSET
          </Text>
          <Image
            source={require('../assets/image/nft.png')}
            alt='nft'
            size='150px'
            mt='8px'
            mb='14px'
          />
          <Text style={styles.name}>Degen Ape</Text>
          <Text mt='6px' style={styles.name}>
            ID: 38920
          </Text>
        </View>
        <View mt='145px' mx='20px'>
          <Text style={styles.sendto}>Send Collectible to:</Text>
          <View
            height='60px'
            borderRadius='8px'
            borderWidth='1px'
            borderColor='#2A5FE9'
            mt='17px'
            justifyContent='center'
          >
            <HStack>
              <Input
                ml='18px'
                width='270px'
                borderWidth='0px'
                fontSize='14px'
                color='#7D7D7D'
              />
              <Divider
                orientation='vertical'
                height='35px'
                color='#7D7D7D'
                ml='auto'
                alignSelf='center'
              />
              <Pressable mx='20px' alignSelf='center'>
                <Image
                  source={require('../assets/image/paste.png')}
                  size='18px'
                  alt='paste'
                />
              </Pressable>
            </HStack>
          </View>
          <View
            height='106px'
            borderWidth='1px'
            borderColor='#fff'
            borderRadius='8px'
            mt='17px'
            px='15px'
          >
            <HStack mt='20px'>
              <Text style={styles.gasfee}>Estimate gas fee</Text>
              <Text style={styles.gasfeeinfo}>0.000438 ETH</Text>
            </HStack>
            <Divider mt='15px' mb='20px' />
            <HStack>
              <Text style={styles.gasfee}>Total</Text>
              <Text style={styles.gasfeeinfo}>0.000438 ETH</Text>
            </HStack>
          </View>
          <Pressable mt='80px' mb='40px'>
            <MainButton data='Send NFT' />
          </Pressable>
        </View>
      </ScrollView>
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
  asset: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    lineHeight: 21.78,
    color: '#7D7D7D',
    textAlign: 'center',
  },
  name: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 19.36,
    color: '#FFF',
    textAlign: 'center',
  },
  sendto: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    lineHeight: 16.78,
    color: '#A5A5A5',
  },
  gasfee: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16.71,
    textAlign: 'left',
    color: '#fff',
  },
  gasfeeinfo: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    lineHeight: 19.1,
    textAlign: 'right',
    color: '#fff',
    marginLeft: 'auto',
  },
})
export default NftDetail
