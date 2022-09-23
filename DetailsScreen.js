import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";


function DetailsScreen ( {route} ) {
  const { movie_id } = route.params;
  console.log(movie_id);

  const [data, setData] = useState([]);

    useEffect(() => {
        fetchMovie();
    }, []);

    function fetchMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0c2928a0d441bf2ce59630be504699c4&language=en-US`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{data.title}</Text>
      {/* <Text style={styles.text}>{'Production: ' + data.production_companies}</Text> */}
      <Text style={styles.text}>{'Release date: ' + data.release_date}</Text>
      <Text style={styles.text}>{'Runtime: ' + data.runtime + 'min.'}</Text>
      <Text style={styles.text}>{'Vote average: ' + data.vote_average}</Text>
      <Text style={styles.text}>{'Vote count: ' + data.vote_count}</Text>
      <Text style={styles.text}>{'Language: ' + data.original_language}</Text>
      <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,}}/>
      <Text style={styles.overview}>{data.overview}</Text>
      {/* <Text style={styles.text}>{'Available languages: ' + data.spoken_languages}</Text> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
    },
    text: {
      fontSize: 20,
    },
    overview: {
      fontSize: 18,
      maxWidth: 700,
    },
    image: {
      width: "275px",
      height: "400px",      
    },
  });

export default DetailsScreen;