import React from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  HStack,
  View,
  Text,
  Pressable,
  Image,
} from 'native-base'

const Numpad = () => {
  return (
    <View backgroundColor='#000'>
      <View
        px='26px'
        pt='15px'
        pb='20px'
        backgroundColor='#5F5F5F'
        borderTopRadius='15px'
      >
        <HStack justifyContent='space-around'>
          <Pressable>
            <Text style={styles.number}>1</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>2</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>3</Text>
          </Pressable>
        </HStack>
        <HStack justifyContent='space-around'>
          <Pressable>
            <Text style={styles.number}>4</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>5</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>6</Text>
          </Pressable>
        </HStack>
        <HStack justifyContent='space-around'>
          <Pressable>
            <Text style={styles.number}>7</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>8</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>9</Text>
          </Pressable>
        </HStack>
        <HStack justifyContent='space-around'>
          <Pressable>
            <Text style={styles.number}>.</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.number}>0</Text>
          </Pressable>
          <Pressable pt='8px'>
            <Image
              source={require('../assets/image/backspace.png')}
              alt='backspace'
              size='32px'
            />
          </Pressable>
        </HStack>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  number: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 25,
    lineHeight: 29.83,
    textAlign: 'center',
    height: 40,
    width: 32,
    marginVertical: 11,
    color: '#FFF',
  },
})
export default Numpad
