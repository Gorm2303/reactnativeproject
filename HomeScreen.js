import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function HomeScreen ( {navigation} ) {

    return (
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <Text style={styles.link}
        onPress={() => navigation.navigate("Top")}>Top Rated Movies</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',

    },
    link: {
      fontSize: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
    },
  });

export default HomeScreen;