import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import TestFunc from './Test';
import ForLoops from './Loop';
import FatList from './Flatlist';
import { Button } from 'react-native-web';

function HomeScreen ( {navigation} ) {

    return (
      <View style={styles.mainContainer}>
        {TestFunc()}
        <StatusBar style="auto" />
        {ForLoops()}
        {FatList()}
        <Button title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')}/>
      </View>
    );
  }

  

  function SecondScreen ( {navigation} ) {
    const [count, setCount] = useState(0);

    function countPlus() {
      setCount(count+1);
      navigation.push('SecondScreen');
      return {count};
    }


    return (
      <View style={styles.mainContainer}>
        <Text>Hello {count}</Text>
        <Button title="Go to Second Screen" onPress={() => countPlus()}/>
        <Button title="Go to Dat Third Screen" onPress={() => navigation.navigate('DatThirdScreen', {count})}/>
      </View>
    );
  }

  const DatThirdScreen = ({navigation}) => {
    return (
      <View>
          <Text>Third Screen</Text>
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
        <Stack.Screen name="DatThirdScreen" component={DatThirdScreen} />
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