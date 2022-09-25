import { StyleSheet, Text, TouchableOpacity, Button, View, TextInput, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from "react";

function HomeScreen ( {navigation} ) {

  
  const [movie_title, setMovie_title] = React.useState('');
  const [data, setData] = React.useState([]);

  function goCategory(cat, tit) {
    navigation.navigate("Category", {category: {cat}, title: tit});
  }

  function fetchMovie() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0c2928a0d441bf2ce59630be504699c4&language=en-US&query=${movie_title}&page=1&include_adult=false`)
    .then((response) => response.json())
    .then((data) => setData(data.results));
  }
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
          onChangeText={setMovie_title}
          value={movie_title}
          placeholder="Enter movie title"
          keyboardType="default"
          />
          <Button title={'Search'}
                onPress={() => fetchMovie()}/>
        </View>
        <View style={styles.container}>
          <FlatList
          data={data}
          renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate("Details", {movie_id: item.id})} style={styles.imgContainer}>
            <Image 
            style={styles.image} 
            source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,}}
            />
          </TouchableOpacity>
          }
          numColumns={3}
          keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
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
    },
    image: {
      width: "175px",
      height: "260px",
      marginVertical: 8,
      marginHorizontal: 4,
      
    },
  });

export default HomeScreen;