import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function onboarding1() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://lun-us.icons8.com/a/SOl9rga1Ykui73RT0mNKuw/5FiR36NNt0GBvmrjkCywVw/noun_mac_2076879.png',
        }}
      />
      <Text style={styles.browseFood}>Apple Pay</Text>
      <Text style={styles.Welcome}>We know you’re busy, so you can pay with your phone in just one click</Text>
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