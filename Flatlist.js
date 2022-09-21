import { StyleSheet, SafeAreaView, FlatList, Text, Image, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";

function App ( {navigation} ) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    function fetchMovies() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0c2928a0d441bf2ce59630be504699c4&language=en-US&page=1')
        .then((response) => response.json())
        .then((data) => setData(data.results));
    }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Image 
        style={styles.image} 
        source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,}}
        />
        </TouchableOpacity>
      }
      keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flexDirection: 'row',
    width: "135px",
    height: "200px",
    marginVertical: 8,
    marginHorizontal: 4,
  },
    title: {
        fontSize: 32,
      },
  });

export default App;