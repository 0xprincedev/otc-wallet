import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  HStack,
  Image,
  Text,
  Pressable,
  View,
  Button,
} from 'native-base'
import Numpad from '../components/Numpad'

const Swap = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack alignSelf='center' mt='60px'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/image/close.png')}
              alt='close'
              size='18px'
            />
          </Pressable>
          <Text
            fontFamily={'Roboto_500Medium'}
            fontSize={18}
            lineHeight={21.48}
            width='200px'
            textAlign='center'
            color='#ffff'
            ml='50px'
            mr='68px'
          >
            Swap
          </Text>
        </HStack>
        <ImageBackground
          source={require('../assets/image/swap_title.png')}
          alt='swap_title'
          style={{
            width: 361,
            height: 250,
            marginTop: 60,
            alignSelf: 'center',
          }}
        >
          <View>
            <Text style={styles.method} mt='12px' ml='16px'>
              You Send
            </Text>
            <HStack mt='14px' ml='16px' mr='11px'>
              <Text style={styles.amount} mr='auto'>
                0.023915
              </Text>
              <Image
                source={require('../assets/image/coin.png')}
                size='20px'
                borderRadius='10px'
                alt='coin'
              />
              <Text style={styles.coin} ml='14px'>
                BTC{'   >'}
              </Text>
            </HStack>
            <Text style={styles.balance} mt='12px' ml='16px'>
              Balance: 1.048328
            </Text>
          </View>
          <View mt='60px'>
            <Text style={styles.method} ml='16px'>
              You Receive
            </Text>
            <HStack mt='14px' ml='16px' mr='11px'>
              <Text style={styles.amount} mr='auto'>
                0.023915
              </Text>
              <Image
                source={require('../assets/image/coin.png')}
                size='20px'
                alt='coin'
                borderRadius='10px'
              />
              <Text style={styles.coin} ml='14px'>
                NEO{'   >'}
              </Text>
            </HStack>
            <Text style={styles.balance} mt='12px' ml='16px'>
              Balance: 0
            </Text>
          </View>
        </ImageBackground>
        <Button
          mx='20px'
          height='60px'
          backgroundColor='#2A5FE9'
          _text={styles.button}
          mt='115px'
          mb='30px'
        >
          Exchange
        </Button>
      </ScrollView>
      <Numpad />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  method: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 14,
    lineHeight: 16.78,
    color: '#fff',
  },
  amount: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19.09,
    color: '#F7931A',
  },
  balance: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19.09,
    color: '#fff',
  },
  coin: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    lineHeight: 21.48,
    color: '#fff',
  },
  button: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    lineHeight: 21.78,
    color: '#fff',
  },
})

export default Swap
