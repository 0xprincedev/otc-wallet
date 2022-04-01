import React from 'react'
import Swiper from 'react-native-swiper'
import { Dimensions } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Pressable,
  Image,
  Text,
  HStack,
} from 'native-base'

import HubProp from '../components/HubProp'

const { width } = Dimensions.get('window')

const MyHub = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack mb='17px' mt='60px' justifyContent='center'>
          <Pressable onPress={() => navigation.goBack()} height='20px'>
            <Image
              source={require('../assets/image/close.png')}
              size='20px'
              alt='close'
            />
          </Pressable>
          <Text
            fontFamily={'Roboto_500Medium'}
            fontSize={18}
            lineHeight={21.48}
            textAlign='center'
            color='#fff'
            mr='60px'
            ml='40px'
            width='200px'
          >
            Your Hub
          </Text>
        </HStack>
        <Swiper loop={false} height='100%' showsPagination={false}>
          <Image
            source={require('../assets/image/buyotccard.png')}
            alt='buyotccard'
            width={width - 36}
            height='236px'
            alignSelf='center'
          />
          <Image
            source={require('../assets/image/buygiftcard.png')}
            alt='buygiftcard'
            width={width - 36}
            height='236px'
            alignSelf='center'
          />
        </Swiper>
        <Text
          mt='32px'
          ml='20px'
          fontFamily={'Roboto_500Medium'}
          fontSize={16}
          lineHeight={19.09}
          color='#7D7D7D'
        >
          PAYMENT
        </Text>
        <HStack ml='4px'>
          <HubProp path={require('../assets/image/swap.png')} title='Swap' />
          <HubProp path={require('../assets/image/send.png')} title='Send' />
          <HubProp
            path={require('../assets/image/receive.png')}
            title='Receive'
          />
        </HStack>
        <Text
          mt='32px'
          ml='20px'
          fontFamily={'Roboto_500Medium'}
          fontSize={16}
          lineHeight={19.09}
          color='#7D7D7D'
        >
          FEATURES
        </Text>
        <HStack ml='4px'>
          <HubProp
            path={require('../assets/image/otccard.png')}
            title='OTC Card'
          />
          <HubProp
            path={require('../assets/image/giftcard.png')}
            title='Gift Cards'
          />
          <HubProp
            path={require('../assets/image/assets.png')}
            title='Assets'
          />
          <HubProp path={require('../assets/image/nfts.png')} title="NFT's" />
        </HStack>
        <Text
          mt='32px'
          ml='20px'
          fontFamily={'Roboto_500Medium'}
          fontSize={16}
          lineHeight={19.09}
          color='#7D7D7D'
        >
          PROFILE
        </Text>
        <HStack ml='4px'>
          <Pressable onPress={() => navigation.navigate('Setting')}>
            <HubProp
              path={require('../assets/image/settings.png')}
              title='Settings'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Support')}>
            <HubProp
              path={require('../assets/image/support.png')}
              title='Support'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Security')}>
            <HubProp
              path={require('../assets/image/security.png')}
              title='Security'
            />
          </Pressable>
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default MyHub
