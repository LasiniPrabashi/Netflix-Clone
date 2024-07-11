import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'

const songs = [
    {
      id: 1,
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      image: require('../../../assets/svg/download.jpg')
    },
    {
      id: 2,
      title: 'Perfect',
      artist: 'Ed Sheeran',
      image: require('../../../assets/svg/download.jpg')
    },
    {
      id: 3,
      title: 'Thinking Out Loud',
      artist: 'Ed Sheeran',
      image: require('../../../assets/svg/download.jpg')
    },
    {
      id: 4,
      title: 'Thinking Out Loud',
      artist: 'Ed Sheeran',
      image: require('../../../assets/svg/download.jpg')
    },
    {
      id: 5,
      title: 'Thinking Out Loud',
      artist: 'Ed Sheeran',
      image: require('../../../assets/svg/download.jpg')
    }
    
  ]

export default function Details() {
  const [isMute, setIsMute] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.trailerContainer}>
        {/* <Image
          source={{uri: data.seasons.items[0].episodes.items[1].poster}}
          style={styles.trailer}
        /> */}
        <Pressable style={styles.playBtn}>
          <Ionicons name="play-sharp" size={30} color="white" />
        </Pressable>
        <Pressable
          style={styles.audioBtn}
          onPress={() => {
            setIsMute(!isMute);
          }}>
          {isMute ? (
            <Octicons name="mute" size={20} color="white" />
          ) : (
            <Octicons name="unmute" size={20} color="white" />
          )}
        </Pressable>
      </View>
    <View style={styles.imageContainer}>
      <View style={styles.detailsContainer}>
        {/* <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity> */}
        <View style={styles.stats}>
          <Text style={styles.match}>98% Match</Text>
          {/* <Text style={styles.year}>{data.year}</Text> */}
          <Text style={styles.age}>12+</Text>
          {/* <Text style={styles.seasons}>{data.numberOfSeasons} Seasons</Text> */}
          <MaterialIcons name="hd" size={30} color="white" />
        </View>
         <Pressable style={styles.playButton}>
          <Ionicons name="play-sharp" size={30} color="black" />
          <Text style={styles.playText}>Play</Text>
        </Pressable>
        <Pressable style={styles.downloadBtn}>
          <Octicons name="download" size={30} color="white" />
          <Text style={styles.downloadText}>Download</Text>
        </Pressable>
        {/* <Ionicons name="ellipsis-vertical" size={28} color="white" style={styles.moreIcon} />
        <Ionicons name="play-circle" size={52} color="green" style={styles.playIcon} /> */}
      </View>
    </View>
    <Text style={styles.baseText}>Episodes</Text>
    
      {songs.map((song, index) => (
        <View key={song.id} style={styles.popularContainer}>
          <Text style={styles.rankText}>{index + 1}</Text>
          <Image
            style={styles.popularImage}
            // source={song.image}
          />
          <View style={styles.textContainer}>
            {/* <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songArtist}>{song.artist}</Text> */}
          </View>
          <Ionicons name="ellipsis-vertical" size={24} color="white" style={styles.popularMoreIcon} />
        </View>
      ))}
    </ScrollView>
    <View style={styles.bottomIcons}>
      <Ionicons name="home" size={24} color="grey" style={styles.icons} />
      <Ionicons name="time" size={24} color="grey" style={styles.icons} />
      <Ionicons name="search" size={24} color="grey" style={styles.icons} />
      <Ionicons name="download" size={24} color="grey" style={styles.icons} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
      },
      scrollView: {
        marginTop: 10,
      },
      imageContainer: {
        alignItems: 'center',
        marginTop: 0,
      },
      tinyLogo: {
        width: 360,
        height: 300,
      },
      imageText: {
        color: 'darkgray',
        fontSize: 16,
        marginTop: 20,
        marginRight: 180,
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        marginRight: 140,
      },
      followButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      moreIcon: {
        marginLeft: 10,
      },
      playIcon: {
        marginLeft: 10,
      },
      baseText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        marginTop: 20,
        marginLeft: 20,
      },
      popularContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
      },
      rankText: {
        color: 'white',
        fontSize: 20,
        marginRight: 10,
      },
      popularImage: {
        width: 60,
        height: 60,
      },
      textContainer: {
        marginLeft: 10,
        flex: 1,
      },
      songTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      songArtist: {
        color: 'gray',
        fontSize: 16,
      },
      popularMoreIcon: {
        marginLeft: 10,
      },
      bottomIcons: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      icons: {
        marginHorizontal: 20,
      },

    trailerContainer: {
      height: 270,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    trailer: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
    },
    playBtn: {
      position: 'absolute',
      borderColor: 'red',
      height: 60,
      width: 60,
      padding: 8,
      borderWidth: 2,
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    audioBtn: {
      position: 'absolute',
      height: 40,
      width: 40,
      padding: 8,
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      right: 20,
      bottom: 20,
    },
    playButton: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
      marginVertical: 5,
      width: 300,
    },
    playText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5,
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
})