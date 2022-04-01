import React from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Pressable,
  Image,
  HStack,
  View,
} from 'native-base'
import { Roboto_400Regular } from '@expo-google-fonts/dev'

let notify = [
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Sent',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Purchased',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Purchased',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Received',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Sent',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Purchased',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Purchased',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Received',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Sent',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Purchased',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Purchased',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Received',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Sent',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Purchased',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Purchased',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
  {
    title: 'Transaction Alert',
    date: 'Feb 16th',
    amount: 0.00239,
    unit: 'BTC',
    type: 'Received',
    address: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  },
]

const Notification = ({ navigation }) => {
  const makeList = () => {
    let data = []
    for (let i = 0; i < notify.length; i++) {
      let subData = []
      subData.push(
        <Text
          fontFamily={'Roboto_500Medium'}
          fontSize={18}
          lineHeight={21.48}
          color='#7D7D7D'
        >
          {notify[i].title}
          {'  '}
          <Image
            source={require('../assets/image/bigdot.png')}
            size='9px'
            alt='.'
          />
          <Text fontFamily={'Roboto_400Regular'}>
            {'  '}
            {notify[i].date}
          </Text>
        </Text>
      )
      let image
      if (notify[i].type == 'Purchased')
        image = (
          <Image
            source={require('../assets/image/purchasenotify.png')}
            size='25px'
            alt='p'
            mt='15px'
            mr='10px'
          />
        )
      else
        image = (
          <Image
            source={require('../assets/image/othernotify.png')}
            alt='sr'
            width='21.5px'
            height='17.5px'
            mt='18px'
            mr='13px'
          />
        )
      subData.push(
        <HStack mb='20px'>
          {image}
          <View mt='8px'>
            <Text
              fontFamily={'OpenSans_400Regular'}
              fontSize={18}
              lineHeight={21.58}
              color='#fff'
            >
              {notify[i].amount} {notify[i].unit} {notify[i].type}
            </Text>
            <Text
              fontFamily={'OpenSans_400Regular'}
              fontSize={14}
              lineHeight={16.78}
              color='#fff'
              mt='3px'
            >
              {notify[i].address.slice(0, 5)}
              {'...'}
              {notify[i].address.slice(
                notify[i].address.length - 5,
                notify[i].address.length
              )}
            </Text>
          </View>
        </HStack>
      )
      data.push(subData)
    }
    return data
  }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack alignSelf='center' mt='60px'>
          <Pressable mr='54px' onPress={() => navigation.goBack()}>
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
            mr='72px'
          >
            NOTIFICATIONS
          </Text>
        </HStack>
        <View mt='50px' ml='28px'>
          {makeList()}
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default Notification
