import React from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  FlatList,
  Text,
  Pressable,
  Image,
  HStack,
  VStack,
  View,
  ScrollView,
} from 'native-base'
import { ListItemBase } from 'react-native-elements/dist/list/ListItemBase'

let k = 0

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
  return (
    <NativeBaseProvider>
      <ScrollView bg='#000'>
        <HStack alignSelf='center' mt='60px' mb='60px'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              size='18px'
              source={require('../assets/image/close.png')}
              alt='close'
            />
          </Pressable>
          <Text style={styles.title} ml='60px' mr='78px'>
            NOTIFICATIONS
          </Text>
        </HStack>
        <FlatList
          data={notify}
          renderItem={({ item }) => (
            <VStack ml='28px' mb='20px'>
              <Text style={styles.subtitle}>
                {item.title + '  '}
                <Image
                  source={require('../assets/image/bigdot.png')}
                  size='9px'
                  alt='dot'
                />
                {'  ' + item.date}
              </Text>
              <HStack mt='8px' alignItems='center'>
                <Image
                  source={require('../assets/image/coin.png')}
                  size='25px'
                  borderRadius='13px'
                  alt='coin'
                  mr='10px'
                />
                <VStack>
                  <Text style={styles.history}>
                    {item.amount + ' ' + item.unit + ' ' + item.type}
                  </Text>
                  <Text style={styles.address}>
                    {item.address.slice(0, 5) +
                      '...' +
                      item.address.slice(
                        item.address.length - 5,
                        item.address.length
                      )}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    lineHeight: 21.48,
    width: 200,
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    lineHeight: 21.48,
    color: '#7D7D7D',
  },
  history: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    lineHeight: 24.55,
    color: '#fff',
  },
  address: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 14,
    lineHeight: 16.78,
    color: '#fff',
  },
})

export default Notification
