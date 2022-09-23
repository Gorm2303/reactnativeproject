import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen ( {navigation} ) {

  function goCategory(cat, tit) {
    navigation.navigate("Category", {category: {cat}, title: tit});
  }


    return (
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <TouchableOpacity>
        <Text style={styles.link}
        onPress={() => goCategory('top_rated', "Top Rated Movies")}>Top Rated Movies</Text>
        <Text style={styles.link}
        onPress={() => goCategory('popular', "Popular Movies")}>Popular Movies</Text>
        <Text style={styles.link}
        onPress={() => goCategory('upcoming', "Upcoming Movies")}>Upcoming Movies</Text>
        <Text style={styles.link}
        onPress={() => goCategory('now_playing', "Now Playing Movies")}>Now Playing Movies</Text>
        </TouchableOpacity>
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
      color: "#0000FF",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
    },
  });

export default HomeScreen;