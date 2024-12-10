import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Link } from 'expo-router'

const HomeScreen = () => {
  return (
    <SafeAreaView>

      <Link className='mb-5 w-20 h-12 bg-purple-400' href={'/products'}>Products {' '}</Link>
      <Link className='mb-5 w-20 h-12 bg-purple-400' href={'/profile'}>Profiles {' '}</Link>
      <Link className='mb-5 w-20 h-12 bg-purple-400' href={'/settings'}>Settings {' '}</Link>
    </SafeAreaView>

  )
}

export default HomeScreen