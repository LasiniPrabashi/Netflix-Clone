
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
