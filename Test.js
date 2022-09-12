import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


export default function TestFunc () {
    const [disState, setText] = useState("This is disState");
    var [count, setCount] = useState(0);

    function onClick() {  
        setCount(count+1);
        setText("New disState 2k " + count);
    }

    return (
        <View style={styles.disCon}>
            <Text>{disState}</Text>
            <Button title="That Button" onPress={onClick} />
        </View>
    );
}

const styles = StyleSheet.create({
    disCon: {
        backgroundColor: "#ffc0cb",
    },
});