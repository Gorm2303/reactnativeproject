import { SafeAreaView, FlatList, View, Text} from "react-native";
import { useEffect, useState } from "react";

const DATA = [
    {   id: "1",
        title: "Item 1",},
    {   id: "2",
        title: "Item 2",},
    {   id: "3",
        title: "Item 3",},
];

const Item = ({title}) => (
    <View>
        <Text>{title}</Text>
    </View>
);

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    function fetchMovies() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    console.log(data);

    const renderItem = ({item}) => (
        <Item title = {item.title}/>
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

export default App;