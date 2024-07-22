
import { StyleSheet, Text, View, Image, ScrollView,FlatList } from 'react-native';
import React from 'react';
import Header from '@/comman/Header/Header';
import CategorySlider from '@/components/pages/CategorySlider';
import categories from '@/data/categories';


const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <Header />
      <FlatList
        data={categories.items}
        renderItem={({item}) => <CategorySlider category={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      {/* <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.baseText}>Popular on Netflix</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/svg/stranger.jpg')}
          />
        </View>
        <View style={styles.imageContainer2}>
          <Image
            style={styles.tinyLogo2}
            source={require('../../assets/svg/Irishaman.png')}
          />
        </View>
        <Text style={styles.baseText2}>Trending now</Text>
        <View style={styles.imageContainer3}>
          <Image
            style={styles.tinyLogo3}
            source={require('../../assets/svg/strager2.jpg')}
          />
        </View>
        <View style={styles.imageContainer4}>
          <Image
            style={styles.tinyLogo4}
            source={require('../../assets/svg/got.jpg')}
          />
        </View>
        <Text style={styles.baseText3}>Latin American Movies & TV</Text>
        {/* Add more content here as needed */}
      {/* </ScrollView>
      </View> */} 
    </View>
  );
};

export default Home;

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
    marginTop: 10,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    marginBottom: 10,
  },
  baseText2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    marginTop: 20,
    marginBottom: 10,
    bottom: 160,
  },
  baseText3: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    bottom: 320,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer2: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer3: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer4: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tinyLogo: {
    width: 130,
    height: 130,
    right: 90,
  },
  tinyLogo2: {
    width: 130,
    height: 130,
    left: 50,
    bottom: 150,
  },
  tinyLogo3:{
    width: 130,
    height: 130,
    bottom: 150,
    right: 90,
  },
  tinyLogo4:{
    width: 130,
    height: 130,
    left:50,
    bottom: 300,
  }
});
