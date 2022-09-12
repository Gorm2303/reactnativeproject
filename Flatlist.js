import { SafeAreaView, FlatList, View, Text} from "react-native";

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

    const renderItem = ({item}) => (
        <Item title = {item.title}/>
    );

  return (
    <SafeAreaView>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default App;