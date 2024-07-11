import { StyleSheet, Text, View,Image,ScrollView} from 'react-native'
import React from 'react'
import Header from '@/comman/Header/Header'
import { Ionicons } from '@expo/vector-icons'




const Home = () => {

  return (
    // <ScrollView style={styles.pageContainer}
    // stickyHeaderIndices={[0]}
    // showsVerticalScrollIndicator={false}>
  
     <View  style={styles.pageContainer}>
      <Header />
    
      <Text style={styles.baseText}>Popular on Netflix</Text>

  <View style={styles.imageContainer}>
      <Image
        style={styles.tinyLogo}
        
        source={require('../../../assets/svg/stranger.jpg')}
      />
      {/* <Text style={styles.imageText}>Ed Sheeran, Katy perry{'\n'}Pitbull and more</Text> */}
      
    </View>

    <View style={styles.imageContainer2}>
      <Image
        style={styles.tinyLogo2}
        source={require('../../../assets/svg/Irishaman.png')}
      />
      {/* <Text style={styles.imageText}>Catch the Letest Playlist{'\n'}made jus for you....</Text> */}
    </View>

    <Text style={styles.baseText2}>Trending now</Text>

<View style={styles.imageContainer3}>
  <Image
    style={styles.tinyLogo2}
    source={require('../../../assets/svg/strager2.jpg')}
  />
  {/* <Text style={styles.imageText}>Believe</Text> */}
  
</View>

<View style={styles.imageContainer4}>
      <Image
        style={styles.tinyLogo2}
        source={require('../../../assets/svg/got.jpg')}
      />
      {/* <Text style={styles.imageText}>Perfect</Text> */}
      
    </View>

    <Text style={styles.baseText3}>Latin American Movies & Tv</Text>

    {/* <View style={styles.imageContainer7}>
      <Image
        style={styles.tinyLogo2}
        source={require('../../../assets/svg/download.jpg')}
      /> 
       </View > */}


         <View style={styles.bottomIcons}>
         <Ionicons name="home" size={24} color="gray" style={styles.icons} />
         <Ionicons name="time" size={24} color="gray" style={styles.icons} />
          <Ionicons name="search" size={24} color="gray" style={styles.icons} />
          <Ionicons name="download" size={24} color= 'gray'  style={styles.icons} />
          </View> 

</View> 
 

    
   

 
 
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  root: {
    paddingTop: 4,
    backgroundColor: "#000000",
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: 80,
   left:10,
    color: 'grey',
  },
  baseText2:{
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: 290,
    left: 15,
    color: 'grey',

  },
  baseText3:{
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 20,
    position: 'absolute',
   bottom:120,
   left: 10,

  },
  iconsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 30,
    right: -150,
  },
  icon: {
    marginRight: 10,
  },
  imageContainer: {
    position: 'absolute',
    top: 120,
    left: 10,
    alignItems: 'center', 
    height: 70,
     borderTopWidth: 0,
     elevation: 10,
    paddingRight: 10,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 160,
    height: 160,
  },
  imageContainer2: {
    position: 'absolute',
    top: 120,
    left: 180,
    alignItems: 'center', 
    backgroundColor: '#000',
    height: 70,
    borderTopWidth: 0,
     elevation: 10,
    paddingRight: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  tinyLogo2: {
    width: 160,
    height: 160,
  },
  imageText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10, 
  
  },
  imageContainer3:{
    position: 'absolute',
    top: 330,
    left: 10,
    alignItems: 'center', 
    backgroundColor: '#000',
    borderTopWidth: 0,
     elevation: 10,
    paddingRight: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageContainer4:{
    position: 'absolute',
    bottom:170,
    left: 180,
    alignItems: 'center',
    borderTopWidth: 0,
     elevation: 10,
    paddingRight: 10,
    resizeMode: 'cover',
    borderRadius: 10, 
  },
  tinyLogo3:{
    width:100,
    height:100,
  },
  imageContainer5:{
    position: 'absolute',
    bottom:230,
    left:80,
    alignItems: 'center',
  },
  imageContainer6:{
    position: 'absolute',
     top:560,
    right: 70,
    alignItems: 'center', 
    
    
  },
  imageContainer7:{
    position: 'absolute',
    bottom:66,
    left: -46,
    alignItems: 'center', 
  },
  imageContainer8:{
    position: 'absolute',
    bottom:66,
    left:80,
    alignItems: 'center',
  },
  tinyLogo4:{
    width:100,
    height:100,
    borderRadius: 80,
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    color: 'grey',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  icons: {
    marginRight: 20,
  },
})