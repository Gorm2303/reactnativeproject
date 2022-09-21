import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FatList from './Flatlist';


function HomeScreen ( {navigation} ) {

    return (
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <Text>Hello at the first screen</Text>
        {FatList(navigation)}
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#fff',
    },
  });

export default HomeScreen;