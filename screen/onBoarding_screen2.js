import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function onboarding1() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://lun-us.icons8.com/a/SOl9rga1Ykui73RT0mNKuw/7K5zLUmTDkOOtBzsgYtVKw/icons8-delivery-500.png',
        }}
      />
      <Text style={styles.browseFood}>Order Food</Text>
      <Text style={styles.Welcome}>Hungry? Order food in just a few clicks and we’ll take care of you..</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EA33A',
    justifyContent:'center',
    alignItems:'center',
    
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom:70
  },
  browseFood:{
    color:'white',
    fontSize:17,
    marginBottom:20
  },
  Welcome:{
    width: 300, 
      color:'white',
      fontSize:17,
      textAlign:'center',
      marginHorizontal:20
  },
});