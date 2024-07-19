import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    const [searchText, setSearchText] = useState('');
  return (
    <View>
     <View>
    <Text style={styles.baseText}>Search</Text>
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
        // top: 70,
        width: '96%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
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
})