import { StyleSheet, View, Text } from "react-native-web";
import FatList from './Flatlist'


function TopRated ( {navigation} ) {

    return (
        <View style={styles.mainContainer}>
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

export default TopRated;