import React from 'react'
import { StyleSheet } from 'react-native'
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
import MainButton from '../components/MainButton'

const ConfirmSend = ({ navigation }) => {
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
            Deposite Summary
          </Text>
        </HStack>
        <View mx='23px' mt='40px'>
          <HStack
            pb='18px'
            mb='20px'
            borderBottomWidth='1px'
            borderBottomColor='#5A5A5A'
          >
            <Text style={styles.left}>Deposite to</Text>
            <Text ml='auto' style={styles.right}>
              mq4L3wL...AJEd7hHWoL
            </Text>
          </HStack>
          <HStack
            pb='18px'
            mb='20px'
            borderBottomWidth='1px'
            borderBottomColor='#5A5A5A'
          >
            <Text style={styles.left}>Sending from</Text>
            <Text ml='auto' style={styles.right}>
              mq4L3wL...AJEd7hHWoL
            </Text>
          </HStack>
          <HStack
            pb='18px'
            mb='20px'
            borderBottomWidth='1px'
            borderBottomColor='#5A5A5A'
          >
            <Text style={styles.left}>Deposite amount</Text>
            <Text ml='auto' style={styles.right}>
              mq4L3wL...AJEd7hHWoL
            </Text>
          </HStack>
          <HStack
            pb='18px'
            mb='20px'
            borderBottomWidth='1px'
            borderBottomColor='#5A5A5A'
          >
            <Text style={styles.left}>Deposite fee</Text>
            <Text ml='auto' style={styles.right}>
              mq4L3wL...AJEd7hHWoL
            </Text>
          </HStack>
        </View>
        <Button
          mx='20px'
          onPress={() => navigation.navigate('MyWallet')}
          height='60px'
          backgroundColor='#2A5FE9'
          _text={styles.button}
          mt='450px'
          mb='40px'
        >
          Deposite Bitcoin
        </Button>
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
  left: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    lineHeight: 16.71,
    color: '#fff',
    textAlign: 'left',
  },
  right: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    lineHeight: 16.71,
    color: '#fff',
    textAlign: 'right',
  },
  button: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    lineHeight: 21.78,
    color: '#fff',
  },
})

export default ConfirmSend
