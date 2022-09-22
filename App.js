import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"
import TopRated from "./TopRated"

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Top" component={TopRated} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;