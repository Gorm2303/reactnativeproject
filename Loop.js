import { View } from "react-native-web";
import { Text } from 'react-native';


const items = [
    {name: "hello",},
    {name: "hello again",},
    {name: "hello again and again",},
];

export default function ForLoops() {
    return (
        <View style={StyleSheet.container}>
            {items.map((item) => (
                <Text>{item.name}</Text>
            ))}
        </View>
    );
}
