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
            Depen Age
          </Text>
        </HStack>
        <Image
          source={require('../assets/image/nft1.png')}
          width='400px'
          height='300px'
          alignSelf='center'
          borderRadius='10px'
          alt='nft'
          mt='20px'
        />
        <Text style={styles.bidinfo}>Lastest Bid</Text>
        <Text style={styles.bidprice}>2.18ETH</Text>
        <View ml='15px' mr='45px'>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descinfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nunc
            vitae nunc pharetra ut. Pulvinar libero velit feugiat egestas
            viverra egestas etiam. A non est tortor enim nisl mauris dolor
            faucibus felis.
          </Text>
          <Text style={styles.detail}>Details:</Text>
          <HStack mt='12px'>
            <Text style={styles.detailinfo}>Contract Address</Text>
            <Text style={styles.address}>0xedc3...826b</Text>
          </HStack>
          <HStack mt='10px'>
            <Text style={styles.detailinfo}>Token ID</Text>
            <Text style={styles.address}>6452</Text>
          </HStack>
          <HStack mt='10px'>
            <Text style={styles.detailinfo}>Token Standard</Text>
            <Text style={styles.tokentype}>ERC-721</Text>
          </HStack>
          <Text style={styles.property}>Properties</Text>
          <View flexWrap='wrap' flexDirection='row'>
            <NftProp title='Background' info='Blue' />
            <NftProp title='Head' info='Hat' />
            <NftProp title='Mouth' info='Smile' />
            <NftProp title='Teeth' info='Normal' />
            <NftProp title='Eyes' info='Sunglasses' />
          </View>
        </View>
        <Pressable
          mx='20px'
          mt='30px'
          mb='50px'
          onPress={() => navigation.navigate('NftSend')}
        >
          <MainButton data='Send NFT' />
        </Pressable>
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
  bidinfo: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    lineHeight: 19.36,
    letterSpacing: 0.05,
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
  bidprice: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19.36,
    textAlign: 'center',
    marginTop: 4,
    color: '#fff',
  },
  desc: {
    marginTop: 30,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#4C73D7',
  },
  descinfo: {
    marginTop: 10,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16.94,
    width: 350,
    color: '#7D7D7D',
  },
  detail: {
    marginTop: 12,
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#fff',
  },
  detailinfo: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#FFF',
    textAlign: 'left',
  },
  address: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#4C73D7',
    textAlign: 'right',
    marginLeft: 'auto',
  },
  tokentype: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#fff',
    textAlign: 'right',
    marginLeft: 'auto',
  },
  property: {
    marginTop: 12,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#4C73D7',
  },
})
export default NftDetail
