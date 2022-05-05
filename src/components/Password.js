import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Input,
  Pressable,
  HStack,
  VStack,
  Image,
} from 'native-base'

const array = { Poor: '#f00', Low: '#ff0', Medium: '#00f', Good: '#76E268' }

export default function Password() {
  const [password, setPassword] = useState('')
  const [passwordState, setPasswordState] = useState(true)
  const [confirm, setConfirm] = useState('')
  const [confirmState, setConfirmState] = useState(true)
  const [strength, setStrength] = useState('')
  const [strColor, setStrColor] = useState('#f00')
  const [property, setProperty] = useState('')

  const checkPasswordStrength = (pwd) => {
    if (pwd === undefined || pwd == '') {
      return 'Poor'
    }

    let count = 0
    if (pwd.match(/[a-z]+/)) {
      count += 1
    }
    if (pwd.match(/[A-Z]+/)) {
      count += 1
    }
    if (pwd.match(/[0-9]+/)) {
      count += 1
    }
    if (pwd.match(/[$@#&!]+/)) {
      count += 1
    }

    switch (count) {
      case 1:
        return 'Poor'
      case 2:
        return 'Low'
      case 3:
        return 'Medium'
      default:
        return 'Good'
    }
  }

  useEffect(() => {
    setStrength(checkPasswordStrength(password))
    setStrColor(array[strength])
    if (confirm.length < 8) {
      setProperty('Must be at least 8 characters!')
    } else if (password != confirm) {
      setProperty('Password not match')
    } else {
      setProperty(' ')
    }
  })

  return (
    <>
      <View
        borderRadius='16px'
        height='60px'
        backgroundColor='#000'
        borderColor='#181E25'
        borderWidth='1px'
        mb='20px'
      >
        <HStack>
          <VStack>
            <Text
              ml='16px'
              color='#6A84A0'
              fontFamily={'Nunito_400Regular'}
              fontSize={12}
              lineHeight={16}
              mt='10px'
            >
              New Password
            </Text>
            <Input
              color='#fff'
              fontSize='20'
              mt='-10px'
              ml='7px'
              borderWidth={0}
              secureTextEntry={passwordState}
              onChangeText={(e) => setPassword(e)}
              maxWidth='255'
              keyboardType='phone-pad'
            />
          </VStack>
          <Pressable
            onPressIn={() => setPasswordState(false)}
            onPressOut={() => setPasswordState(true)}
            ml={'auto'}
            mr='16px'
            mt='18px'
          >
            <Image
              source={require('../assets/image/eye.png')}
              size='24px'
              alt='show-password'
            />
          </Pressable>
        </HStack>
      </View>
      <Text
        ml='16px'
        opacity={0.7}
        color='#6A84A0'
        fontSize={12}
        lineHeight={16}
        fontFamily={'Archivo_700Bold'}
      >
        Password strength: <Text color={strColor}>{strength}</Text>
      </Text>
      <View
        borderRadius='16px'
        height='60px'
        backgroundColor='#000'
        borderColor='#181E25'
        borderWidth='1px'
        mt='8px'
        mb='20px'
      >
        <HStack>
          <VStack>
            <Text
              ml='16px'
              color='#6A84A0'
              fontFamily={'Nunito_400Regular'}
              fontSize={12}
              lineHeight={16}
              mt='10px'
            >
              New Password
            </Text>
            <Input
              color='#fff'
              fontSize='20'
              mt='-10px'
              ml='7px'
              borderWidth={0}
              secureTextEntry={confirmState}
              onChangeText={(e) => setConfirm(e)}
              maxWidth='255'
            />
          </VStack>
          <Pressable
            onPressIn={() => setConfirmState(false)}
            onPressOut={() => setConfirmState(true)}
            ml={'auto'}
            mr='16px'
            mt='18px'
          >
            <Image
              source={require('../assets/image/eye.png')}
              size='24px'
              alt='show-password'
            />
          </Pressable>
        </HStack>
      </View>
      <Text
        ml='16px'
        opacity={0.7}
        color='#6A84A0'
        fontSize={12}
        lineHeight={16}
        fontFamily={'Archivo_700Bold'}
      >
        {property}
      </Text>
    </>
  )
}
