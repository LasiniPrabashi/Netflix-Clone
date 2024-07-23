import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'

const LodingPage = ({ navigation }: { navigation: any }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Loging-Page');
    }, 7000); // Change the delay as needed (3000ms = 3s)

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#000000'
    }}
  >
   <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png',
      }}
    />
  </View>

  )
}

export default LodingPage

const styles = StyleSheet.create({
    nametext:{
        fontSize:32,
        color:"red"
      },
      input :{
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      tinyLogo:{
        width: 150,
        height: 150,
        margin:20
      }
  
})