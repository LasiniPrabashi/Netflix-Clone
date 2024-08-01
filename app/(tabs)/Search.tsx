import { StyleSheet, Text, View,TextInput,Image,Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Search from '@/comman/Header/Search';
import EpisodeCard from '@/components/pages/EpisodeCard';
import { ScrollView } from 'react-native-virtualized-view'
import search from '@/data/Search';


export default function Details() {
  const [searchText, setSearchText] = useState('');
  const [season, setSeason] = useState('Season 1');
  return (
    
    <View style={styles.pageContainer}>
      
    <Search/>
  <View style={styles.container}>

      <ScrollView style={styles.scrollView}
          contentContainerStyle={styles}
        // stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      >
     <View style={styles.episodeContainer}>
        <FlatList
          data={
            season === 'Season 1'
              ? search.seasons.items[0].episodes.items
              : search.seasons.items[1].episodes.items
          }
          renderItem={({item}) => (
            <EpisodeCard
              title={item.title}
              poster={item.poster}
              duration={item.duration}
              plot={item.plot}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
            
    </ScrollView>
    </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
    container: {
        flex: 1,
        backgroundColor: '#000000',
      },
      scrollView: {
        flex: 2,
        backgroundColor: 'black',
      },
     
    downloadBtn: {
      backgroundColor: 'grey',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    downloadText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    detailsContainer: {
      padding: 15,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      gap: 10,
    },
    match: {
      color: 'green',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
    },
    year: {
      color: 'grey',
      fontSize: 16,
      marginRight: 10,
    },
    age: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
      backgroundColor: 'yellow',
      padding: 3,
      borderRadius: 5,
    },
    seasons: {
      color: 'grey',
      fontSize: 16,
      marginRight: 10,
    },
    searchContainer: {
      position: 'absolute',
      top: 70,
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

    episodeContainer: {
      flex: 1,
     
    }
})