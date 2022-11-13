import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function onboarding1() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://lun-us.icons8.com/a/SOl9rga1Ykui73RT0mNKuw/2jeuV-wq20GxlPzwiXnfyQ/noun_Binoculars_1107295.png',
        }}
      />
      <Text style={styles.browseFood}>Quick Search</Text>
      <Text style={styles.Welcome}>Quickly find food items you like the most</Text>
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
    width: 250,
      color:'white',
      fontSize:17,
      textAlign:'center',
      marginHorizontal:20
  },
});