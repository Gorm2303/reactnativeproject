import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import FatList from './Flatlist';
import { Button } from 'react-native-web';

function HomeScreen ( {navigation} ) {

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')}/>
      <Text>Hello at the first screen</Text>
      {FatList}
    </View>
  );
}

function SecondScreen ( {navigation} ) {

  return (
    <View style={styles.mainContainer}>
      <Text>Hello at the second screen</Text>
      <Button title="Go to Second Screen" onPress={() => navigation.push('SecondScreen')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;