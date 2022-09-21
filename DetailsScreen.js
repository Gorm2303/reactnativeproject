import { StyleSheet, Text, View } from 'react-native';

function DetailsScreen ( {navigation} ) {

  return (
    <View style={styles.mainContainer}>
      <Text>Hello at the Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

export default DetailsScreen;