import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestFunc from './Test';
import ForLoops from './Loop';
import FatList from './Flatlist';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <View style={styles.container}>
        {TestFunc()}
        <StatusBar style="auto" />
        {ForLoops()}
        {FatList()}
      </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
