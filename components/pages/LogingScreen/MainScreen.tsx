import { StyleSheet, Text, View,Image,TextInput,Pressable,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react'
import { router } from 'expo-router';

const MainScreen = ({ navigation }: { navigation: any }) => {

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Icon name="chevron-left" size={30} color="white" />
        <Image
          style={styles.headerImage}
          source={require('../../../assets/svg/FullLogo.png')}
        />
        <Text style={styles.headerText}>Help</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFeild}>
          <TextInput
            style={styles.formInput}
            placeholder="Email or phone number"
            placeholderTextColor="grey"
            onChangeText={text => {
            //   setFormData({...formData, email: text});
            }}
          />
        </View>
        <View style={styles.formFeild}>
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={text => {
            //   setFormData({...formData, password: text});
            }}
          />
        </View>
        <TouchableOpacity style={styles.formButton} onPress={()=>router.push('/Home')}>
        <Text style={styles.formButtonText}>SIGN IN</Text>
      </TouchableOpacity>
      
        <Pressable style={styles.recoverBtn}>
          <Text style={styles.headerText}>Recover Password</Text>
        </Pressable>

        <Text style={styles.guideText}>
          Sign-in is protected by Google reCAPTCHA to ensure you're not a bot.Learn more.
        </Text>
      </View>
      
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerImage: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
      },
      headerText: {
        color: 'white',
        fontSize: 16,
      },
      formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      formFeild: {
        width: '100%',
        height: 50,
        backgroundColor: '#333333',
        borderRadius: 5,
        marginBottom: 10,
        marginVertical: 10,
      },
      formInput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: 'grey',
      },
      formButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#e50914',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
      formButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      recoverBtn: {
        marginVertical: 30,
        fontWeight: 'bold',
      },
      guideText: {
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
      },
})