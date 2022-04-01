import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { View, Image, HStack, Text, Divider, Switch } from 'native-base'

const Width = Dimensions.get('window').width

const SubProfile = ({ path, title, info, toggle }) => {
  const [checked, setChecked] = useState(false)
  const makeToggle = () => {
    let t
    t = (
      <View
        backgroundColor={checked == true ? '#3E3BDA' : '#a1a1aa'}
        width='58px'
        height='32px'
        borderRadius='16px'
        justifyContent='center'
        alignItems='center'
        mt='7px'
      >
        <Switch
          onTrackColor='#3e3bda'
          onThumbColor='#fff'
          size='lg'
          isChecked={checked}
          onValueChange={() => setChecked(!checked)}
        />
      </View>
    )
    return t
  }

  const makeSymbolNext = () => {
    let s
    if (
      title == 'Sync Devices' ||
      title == 'Restore Wallet' ||
      title == 'Delete Wallet'
    ) {
      s = (
        <Text color='#fff' fontSize={24} mr='5px' mt='5px'>
          {'>'}
        </Text>
      )
    }
    return s
  }

  return (
    <View mx='26px' my='8px' backgroundColor='#23232380' borderRadius='8px'>
      <HStack>
        <Image
          source={path}
          size='38px'
          alt='subprofile'
          borderRadius='19px'
          mt='5px'
          ml='7px'
        />
        <View ml='14px'>
          <HStack>
            <Text
              ml='1px'
              mt='13.32px'
              color={title == 'Delete Wallet' ? '#ED5050' : '#fff'}
              fontFamily={
                title == 'Delete Wallet' ? 'Roboto_700Bold' : 'Roboto_500Medium'
              }
              fontSize={18}
              lineHeight={21.48}
              mr='auto'
              mb='13px'
            >
              {title}
            </Text>
            {toggle == true ? makeToggle() : null}
            {makeSymbolNext()}
          </HStack>
          <Divider backgroundColor='#6C6C6C' width={Width - 125} />
          <View justifyContent='center' alignItems='center' height='42px'>
            <Text
              color='#fff'
              fontFamily={'OpenSans_400Regular'}
              fontSize={12}
              lineHeight={14.32}
              letterSpacing='0.02'
              width={Width - 120}
              mt='4px'
              mb='8px'
            >
              {info}
            </Text>
          </View>
        </View>
      </HStack>
    </View>
  )
}

export default SubProfile
