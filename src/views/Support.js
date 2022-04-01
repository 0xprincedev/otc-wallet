import React from 'react'
import { ImageBackground } from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Image,
  Pressable,
  View,
} from 'native-base'
import { Dimensions } from 'react-native'

import SubProfile from '../components/SubProfile'

const Width = Dimensions.get('window').width

const Support = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor='#03031E'>
        <ImageBackground
          source={require('../assets/image/support_title.png')}
          alt='title'
          style={{ width: Width, height: 300 }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/image/back2.png')}
              alt='back'
              size='28px'
              mt='56px'
              ml='16px'
            />
          </Pressable>
        </ImageBackground>
        <View my='22px'>
          <SubProfile
            path={require('../assets/image/faq.png')}
            title="FAQ's"
            toggle={false}
            info='Answers to common questions regarding OTC wallet.'
          />
          <SubProfile
            path={require('../assets/image/newsletter.png')}
            title='OTC Newsletter'
            toggle={true}
            info='Keep upto date with all otc features and updates.'
          />
          <SubProfile
            path={require('../assets/image/contact.png')}
            title='Contact Us'
            info='Get in touch with the OTC support team.'
          />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default Support
