import React from 'react'
import { ImageBackground, Pressable, StyleSheet } from 'react-native'
import { HStack, View, Image, Text, Divider, VStack } from 'native-base'
import Swiper from 'react-native-swiper'
import { addComma, addPlus } from '../util'

const Token = ({ data, navigation }) => {
  return (
    <Swiper showsPagination={false} loop={false} height={'100%'} index={1}>
      <HStack flex='1' bgColor='#593402' borderRadius='8px'>
        <ImageBackground
          source={require('../assets/image/subbackground.png')}
          alt='subback'
          height='80px'
          style={{ width: '100%', height: 80 }}
        >
          <HStack>
            <Pressable onPress={() => navigation.navigate('Send')}>
              <Image
                source={require('../assets/image/subsend.png')}
                width='35px'
                height='52px'
                alt='subsend'
                mx='33px'
                mt='15px'
              />
            </Pressable>
            <Divider
              orientation='vertical'
              height='80px'
              bg='rgba(0,0,0,0.15)'
            />
            <Pressable>
              <Image
                source={require('../assets/image/subreceive.png')}
                width='53px'
                height='52px'
                alt='subreceive'
                mx='17px'
                mt='15px'
              />
            </Pressable>
            <Divider orientation='vertical' bg='rgba(0,0,0,0.15)' />
            <Pressable onPress={() => navigation.navigate('Swap')}>
              <Image
                source={require('../assets/image/subswap.png')}
                width='36px'
                height='53px'
                alt='subswap'
                mt='13px'
                mx='26px'
              />
            </Pressable>
            <Divider orientation='vertical' bg='rgba(0,0,0,0.15)' />
            <HStack alignItems='center'>
              <Image
                source={require('../assets/image/coin.png')}
                size='40px'
                borderRadius='20px'
                alt='coin'
              />
              <VStack ml='6px'>
                <Text style={styles.coin}>{data.name}</Text>
                <Text style={styles.stock}>{data.stock}</Text>
              </VStack>
            </HStack>
          </HStack>
        </ImageBackground>
      </HStack>
      <HStack
        flex='1'
        borderBottomWidth='1px'
        borderBottomColor='rgba(255, 255, 255, 0.22)'
        mt='20px'
        mx='17px'
      >
        <Image
          size='50px'
          alt='crypto'
          borderRadius='25px'
          source={require('../assets/image/coin.png')}
        />
        <View ml='20px' mr='auto'>
          <Text
            fontFamily={'Inter_500Medium'}
            fontSize={16}
            lineHeight={19.36}
            color='#fff'
          >
            {data.name}
          </Text>
          <Text
            mt='13px'
            color='#fff'
            fontFamily={'OpenSans_400Regular'}
            fontSize={14}
            lineHeight={16.78}
          >
            $ US {addComma(data.price)}
            {'   '}
            <Text color='#09930F'>{addPlus(data.percent)}%</Text>
          </Text>
        </View>
        <Text
          color='#fff'
          fontFamily={'OpenSans_400Regular'}
          fontSize={14}
          lineHeight={16.78}
        >
          {data.stock}
        </Text>
      </HStack>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  coin: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 19.36,
    color: '#fff',
  },
  stock: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
    lineHeight: 16.37,
    color: '#fff',
  },
})

export default Token
