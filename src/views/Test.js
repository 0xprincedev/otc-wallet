import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import IconButton from '../UI/IconButton'

import Explore from '../screens/Explore'
import Gallery from '../screens/Gallery'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

import Navigation from '../screens/Navigation'

const closeIcon = require('../../assets/icons/close.png')
const menuIcon = require('../../assets/icons/menu.png')

// THIS REMOVES THE HEADER BOTTOM BORDER FOR IOS AND ANDROID
const styles = {
  header: {
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },
}

const MainNavigationStack = createStackNavigator()
const PopupNavigationStack = createStackNavigator()
const RootNavigationStack = createStackNavigator()

const PopupStackScreen = () => {
  return (
    <PopupNavigationStack.Navigator>
      <PopupNavigationStack.Screen name='Navigation' component={Navigation} />
    </PopupNavigationStack.Navigator>
  )
}

const MainStackScreen = () => {
  return (
    <MainNavigationStack.Navigator>
      <MainNavigationStack.Screen name='Explore' component={Explore} />
      <MainNavigationStack.Screen name='Gallery' component={Gallery} />
      <MainNavigationStack.Screen name='Profile' component={Profile} />
      <MainNavigationStack.Screen name='Settings' component={Settings} />
    </MainNavigationStack.Navigator>
  )
}

const RootStackScreen = () => {
  // BECAUSE WE DON'T WANT TO DISPLAY THE NAVIGATION STACK TITLE
  // WE MUST GET THE ROUTE NAME FROM THE HELPER FUNCTION PROVIDED
  // BY REACT NAVIGATION
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) || 'Explore'
    return routeName
  }

  const getHeaderLeftHelper = (route, navigation) => {
    // WHEN NAVIGATING BETWEEN NESTED NAVIGATION STACKS
    // WE MUST INDICATE BOTH WHICH STACK WE NAVIGATE TO
    // AND WHICH SCREEN TO NAVIGATE TO INSIDE THE NAVIGATE
    // METHOD'S OPTIONS OBJECT
    if (route.name === 'Main') {
      return (
        <IconButton
          icon={menuIcon}
          tintColor='black'
          size={22}
          onPress={() =>
            navigation.navigate('Popup', {
              screen: 'Navigation',
            })
          }
        />
      )
    } else if (route.name === 'Popup') {
      return (
        <IconButton
          icon={closeIcon}
          tintColor='black'
          size={22}
          onPress={() => navigation.goBack()}
        />
      )
    }
  }

  return (
    <RootNavigationStack.Navigator>
      <RootNavigationStack.Screen
        name='Main'
        component={MainStackScreen}
        options={({ route, navigation }) => ({
          headerStyle: styles.header,
          headerLeft: () => getHeaderLeftHelper(route, navigation),
          headerTitle: getHeaderTitle(route),
        })}
      />
      <RootNavigationStack.Screen
        name='Popup'
        component={PopupStackScreen}
        options={({ route, navigation }) => ({
          headerStyle: styles.header,
          headerLeft: () => getHeaderLeftHelper(route, navigation),
          headerTitle: getHeaderTitle(route),
        })}
      />
    </RootNavigationStack.Navigator>
  )
}

const Test = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  }

  return (
    <NavigationContainer theme={theme}>
      <RootStackScreen />
    </NavigationContainer>
  )
}

export default Test
