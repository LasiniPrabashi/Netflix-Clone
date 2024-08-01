
import { StyleSheet, Text, View,  FlatList, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import data from '../../data/movie';
import EpisodeCard from '@/components/pages/EpisodeCard';
import { ScrollView } from 'react-native-virtualized-view'

interface Movie {
  id: string;
  title: string;
  year: number;
  numberOfSeasons: number;
  plot: string;
  cast: string;
  creator: string;
  seasons: {
    items: {
      id: string;
      name: string;
      episodes: {
        items: {
          id: string;
          title: string;
          poster: string;
          duration: string;
          plot: string;
          video: string;
        }[];
      };
    }[];
  };
}

export default function Download() {
  const [isMute, setIsMute] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [season, setSeason] = useState('Season 1');
  return (
   
    <View style={styles.container}>
      <View style={styles.trailerContainer}>
        <Image
          source={{ uri: data.seasons.items[0].episodes.items[1].poster }}
          style={styles.trailer}
        />
        <Pressable style={styles.playBtn}>
          <Ionicons name="play-sharp" size={30} color="white" />
        </Pressable>
        <Pressable
          style={styles.audioBtn}
          onPress={() => {
            setIsMute(!isMute);
          }}
        >
          {isMute ? (
            <Octicons name="mute" size={20} color="white" />
          ) : (
            <Octicons name="unmute" size={20} color="white" />
          )}
        </Pressable>
      </View>
      <ScrollView
        style={styles.pageContainer}
        contentContainerStyle={styles}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.detailsContainer}>
          <View style={styles.stats}>
            <Text style={styles.match}>98% Match</Text>
            <Text style={styles.year}>{data.year}</Text>
            {/* <Text style={styles.age}>12+</Text> */}
            <Text style={styles.seasons}>{data.numberOfSeasons} Seasons</Text>
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
          <Text style={styles.description}>{data.plot}</Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.cast}>
            Cast: {data.cast}
          </Text>
          <Text style={styles.creator}>Creator: {data.creator}</Text>
        </View>

        <View style={styles.buttonGroup}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setIsAdded(!isAdded);
          }}>
          {isAdded ? (
            <Octicons name="checklist" size={30} color="red" />
          ) : (
            <Octicons name="plus" size={30} color="white" />
          )}
          <Text style={styles.buttonText}>My List</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setIsLiked(!isLiked);
          }}>
          {isLiked ? (
            <Ionicons name="thumbs-up" size={30} color="red" />
          ) : (
            <Ionicons name="thumbs-up" size={30} color="white" />
          )}
          <Text style={styles.buttonText}>Rate</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="share" size={30} color="white" />
          <Text style={styles.buttonText}>Share</Text>
        </Pressable>
      </View>
        <View style={styles.episodeOptions}>
          <Pressable style={styles.episodeBtn}>
            <Text style={styles.episodeText}>Episodes</Text>
          </Pressable>
          <Pressable style={styles.more}>
            <Text style={styles.moreText}>More Like This</Text>
          </Pressable>
        </View>

        <View style={styles.episodeContainer}>
       
          <FlatList
            data={
              season === 'Season 1'
                ? data.seasons.items[0].episodes.items
                : data.seasons.items[1].episodes.items
            }
            renderItem={({ item }) => (
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
  );

  

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  trailerContainer: {
    flex: 1,
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
  pageContainer: {
    flex: 2,
    backgroundColor: 'black',
  },
  detailsContainer: {
    padding: 15,
  },
  showName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
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
  playButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
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
  description: {
    color: 'lightgrey',
    fontSize: 16,
    marginVertical: 10,
  },
  cast: {
    color: 'lightgrey',
    fontSize: 12,
    marginVertical: 5,
  },
  creator: {
    color: 'lightgrey',
    fontSize: 12,
    marginVertical: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 0,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    margin: 5,
  },
  episodeOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    gap: 10,
    width: '80%',
  },
  episodeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'red',
    borderTopWidth: 5,
    width: '35%',
  },
  episodeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  more: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  moreText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  picker: {
    width: '50%',
    color: 'white',
    marginHorizontal: 20,
    marginTop: 10,
  },
  pickerItem: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  episodeContainer: {
    flex: 1,
   
  }
})

