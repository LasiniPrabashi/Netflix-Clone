import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    const [searchText, setSearchText] = useState('');
  return (

    <View>
      <View style={styles.navbarContainer}>
       {/* <Icon name="chevron-left" size={30} color="white" /> */}
      <Image style={styles.logo} source={require('../../assets/svg/Logo.png')} />
      {/* <View style={styles.navLinks}>
        <Text style={styles.link}>TV Shows</Text>
        <Text style={styles.link}>Movies</Text>
        <Text style={styles.link}>My List</Text>
      </View> */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        </View>
    </View>
    </View>
   
    
  )
}

const styles = StyleSheet.create({
    searchContainer: {
        position: 'absolute',
        width: '90%',
        top:30,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        left: 50,
      },
      searchIcon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        color: 'black',
      },
      baseText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        marginTop: 20,
        marginLeft: 20,
      },

      navbarContainer: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#000',
      },
      logo: {
        height: 30,
        width: '10%',
        resizeMode: 'contain',
        top:10,
      },
      navLinks: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      link: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 20,
      },
})