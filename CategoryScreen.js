import { StyleSheet, View, Text } from "react-native-web";
import FatList from './Flatlist'


function Category ( {navigation, route} ) {
  const { category, title } = route.params;
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{title}</Text>
            {FatList({navigation, category})}
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

export default Category;