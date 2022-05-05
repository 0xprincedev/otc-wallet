import React from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Text,
  HStack,
  View,
  Input,
  Pressable,
  Divider,
  Button,
} from 'native-base'
import Numpad from '../components/Numpad'
import MainButton from '../components/MainButton'
import { addComma } from '../util'

const Send = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView bg='#000'>
        <HStack alignSelf='center' mt='60px'>
          <Image
            source={require('../assets/image/close.png')}
            size='18px'
            alt='close'
          />
          <Text style={styles.title} ml='60px' mr='78px'>
            Deposite Bitcoin
          </Text>
        </HStack>
        <Text style={styles.totalCurrency} mt='6px'>
          USD 465 of BTC available
        </Text>
        <Image
          source={require('../assets/image/coin.png')}
          size='50px'
          borderRadius='25px'
          alignSelf='center'
          mt='20px'
          alt='coin'
        />
        <Text style={styles.totalCurrency} mt='19px'>
          Enter Amount
        </Text>
        <Text style={styles.amount}>1.7256</Text>
        <Text style={styles.totalAmount}>${addComma(12442.12)}</Text>
        <Text style={styles.price} mt='30px'>
          1 BTC = {addComma(47329)} USD{' '}
        </Text>
        <View
          mt='10px'
          mx='50px'
          borderRadius='5px'
          borderWidth='1px'
          borderColor='#7D7D7D'
          height='50px'
        >
          <HStack>
            <Input borderWidth='0px' fontSize={20} color='#fff' />
            <Divider ml='auto' orientation='vertical' height='48px' />
            <Image
              source={require('../assets/image/coin.png')}
              size='20px'
              alt='coin'
              mx='10px'
              my='15px'
            />
          </HStack>
        </View>
        <Button
          mx='20px'
          onPress={() => navigation.navigate('ConfirmSend')}
          height='60px'
          backgroundColor='#2A5FE9'
          _text={styles.button}
          mt='30px'
          mb='30px'
        >
          Preview Deposite
        </Button>
      </ScrollView>
      <Numpad />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    lineHeight: 21.78,
    width: 200,
    textAlign: 'center',
    color: '#fff',
  },
  totalCurrency: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    lineHeight: 19.01,
    color: '#7D7D7D',
    textAlign: 'center',
  },
  amount: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 48,
    lineHeight: 58.09,
    textAlign: 'center',
    color: '#3949B2',
  },
  totalAmount: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16.71,
    textAlign: 'center',
    color: '#7D7D7D',
  },
  price: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    lineHeight: 21.48,
    color: '#7D7D7D',
    textAlign: 'center',
  },
  button: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    lineHeight: 21.78,
    color: '#fff',
  },
})

export default Send
