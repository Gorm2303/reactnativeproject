import { StyleSheet, SafeAreaView, FlatList, View, Text, Image} from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
    const Item = ({title,vote_average,vote_count,release_date, poster_path, overview}) => (
        <View style={styles.movieView}>
            <Text style={styles.title}>{title}</Text>
            <Text>{vote_average}</Text>
            <Text>{vote_count}</Text>
            <Text>{release_date}</Text>
            <Text>{poster_path}</Text>
            <Image source={{uri: {poster_path}}}/>
            <Text>{overview}</Text>
        </View>
    );

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    function fetchMovies() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0c2928a0d441bf2ce59630be504699c4&language=en-US&page=1')
        .then((response) => response.json())
        .then((data) => setData(data.results));
    }

    const renderItem = ({item}) => (
        <View>
            <Item title = {item.title} 
            vote_average={"Vote \t" + item.vote_average} 
            vote_count={"Vote count \t " + item.vote_count} 
            release_date={"Release date: \t" + item.release_date}
            poster_path={"https://image.tmdb.org/t/p/w500" + item.poster_path}
            overview={"Overview: \n" + item.overview}
            />
        </View>
    );

  return (
    <SafeAreaView>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    movieView: {
      maxWidth: '800px',
      backgroundColor: '#EEE',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
      },
  });

export default App;