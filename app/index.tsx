import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LodingPage from '@/components/pages/LodingPage/LodingPage';
import LogingScreen from '@/components/pages/LogingScreen/LogingScreen';
import MainScreen from '@/components/pages/LogingScreen/MainScreen';
import HomeScreen from '@/app-example/(tabs)';
import { Stack } from 'expo-router';




const stack = createNativeStackNavigator()


export default function index() {
  return (
    <NavigationContainer independent={true}>
    <stack.Navigator initialRouteName="Main-Page">
      <stack.Screen name='Loding-page' component={LodingPage}   options={{
            headerShown: false,
          }}/>
      <stack.Screen name='Main-Page' component={MainScreen} options={{
            headerShown: false,
      }}/>
       <stack.Screen name='Loging-Page' component={LogingScreen} options={{
            headerShown: false,
      }}/>
  {/* <stack.Screen name='Home-Page' component={Home} options={{
            headerShown: false,
      }}/> */}
       
     
    </stack.Navigator>

    
   </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

})



