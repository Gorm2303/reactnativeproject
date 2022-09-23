import { StyleSheet, View, FlatList, Image, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

function App ( {category} ) {
    const [data, setData] = useState([]);

    useEffect(() => {
      for (let i = 1; i <= 5; i++) {
        fetchMovies(i);
      }
    }, []);

    function fetchMovies(page) {
        fetch(`https://api.themoviedb.org/3/movie/${category.cat}?api_key=0c2928a0d441bf2ce59630be504699c4&language=en-US&page=${page}`)
        .then((response) => response.json())
        .then((data) => setData(current => [...current, ...data.results]));
    }
    const navigation = useNavigation();

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  image: {
    width: "175px",
    height: "260px",
    marginVertical: 8,
    marginHorizontal: 4,
    
  },
    title: {
        fontSize: 32,
      },
  });

export default App;