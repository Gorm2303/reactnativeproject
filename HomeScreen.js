import { StyleSheet, Text, TouchableOpacity, Button, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from "react";

function HomeScreen ( {navigation} ) {

  function goCategory(cat, tit) {
    navigation.navigate("Category", {category: {cat}, title: tit});
  }

  const [text, setText] = React.useState('');

    return (
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Movie Database</Text>
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
        <View style={styles.searchView}>
          <TextInput
          style={styles.searchInput}
          onChangeText={setText}
          value={text}
          placeholder="Enter movie title"
          keyboardType="default"
          />
          <Button title={'Search'}
                onPress={() => console.log(text)}/>

        </View>
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
      fontSize: 40,
      fontWeight: "bold",
    },
    searchView: {
      backgroundColor: '#f8f8f8',
      borderRadius: 14,
      margin: 8,
    },
    searchInput: {
      width: 200,
      height: 30,
      padding: 8,
      margin: 8,
    }
  });

export default HomeScreen;