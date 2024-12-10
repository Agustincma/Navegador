import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Link, Redirect } from 'expo-router'

const App = () => {

  return <Redirect href={'/home'}/>
  // return (
  //   <SafeAreaView>
  //     <View className='mt-10'>
  //       <Text className='text-3xl font-work-black text-blue-500'>Hello World</Text>
  //       <Link href={'/products'}>Productos</Link>
  //     </View>
  //     </SafeAreaView>
  // )
}

export default App