import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FatList from './Flatlist';


function HomeScreen ( {navigation} ) {

    return (
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Top Rated Movies</Text>
        {FatList(navigation)}
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',

    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
    },
  });

export default HomeScreen;