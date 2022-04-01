import React from 'react'
import {
  NativeBaseProvider,
  Pressable,
  ScrollView,
  HStack,
  Image,
  Text,
  FormControl,
} from 'native-base'

import MainButton from '../../components/MainButton'
import Seed from '../../components/Seed'

let seed = [
  'what',
  'where',
  'which',
  'who',
  'when',
  'whether',
  'if',
  'else',
  'enable',
  'dynasty',
  'kingdom',
  'phrase',
]

const StepThree = ({ navigation }) => {
  const makeSeedTable = () => {
    let seeds = []
    for (let i = 0; i < 12; i++) {
      seeds.push(<Seed order={i + 1} word={seed[i]} key={i} />)
    }
    return seeds
  }

  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#000'>
        <HStack mt='60' alignSelf='center'>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              alignSelf={'center'}
              source={require('../../assets/image/back.png')}
              size='40px'
              alt='back'
            />
          </Pressable>
          <Image
            source={require('../../assets/image/step3.png')}
            alt='step'
            width='230px'
            mt='15px'
            ml='30px'
            mr='70px'
          />
        </HStack>
        <Text
          fontSize={16}
          color='#62C9E8'
          lineHeight={24}
          fontFamily={'Roboto_600SemiBold'}
          textAlign='center'
          mt='14px'
        >
          Write Down Seed Phrase
        </Text>
        <Text
          color='#8FA2B7'
          mx='40px'
          fontSize={14}
          lineHeight={24}
          fontFamily={'Roboto_400Regular'}
          marginTop='15px'
          textAlign='center'
        >
          This is your seed phrase. Write it down on a paper and keep it in a
          safe place. You'll be asked to re-enter this phrase (in order) on the
          next step.
        </Text>
        <FormControl
          width='375px'
          marginTop='20px'
          alignSelf='center'
          backgroundColor='#fff'
          borderRadius='8px'
          alignItems='center'
          height={196}
          paddingY={30}
          paddingX={30}
          flexDirection='row'
          flexWrap='wrap'
        >
          {makeSeedTable()}
        </FormControl>
        <Text
          color='#7D8EA0'
          mx='44px'
          fontSize={14}
          lineHeight={24}
          fontFamily={'Roboto_400Regular'}
          mt='16px'
          textAlign='center'
        >
          these 12 words are the keys to your wallet. Back them up on an
          external device or cloud. Do not share this with anyone.
        </Text>
        <Pressable
          mt='203px'
          mx='17px'
          onPress={() => navigation.navigate('CreateWalletStepFour')}
        >
          <MainButton data={'Backup to iCloud'} />
        </Pressable>
        <Pressable
          mt='32px'
          mb='39px'
          width='138'
          alignSelf='center'
          onPress={() => navigation.navigate('CreateWalletStepFour')}
        >
          <Text
            fontSize={16}
            lineHeight={24}
            fontFamily='Inter_700Bold'
            color='#5F97FF'
            textAlign='center'
          >
            Back up Manually
          </Text>
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default StepThree
