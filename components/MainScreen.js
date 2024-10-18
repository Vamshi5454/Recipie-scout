import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import ApiCalling from "./ApiCalling";

function MainScreen() {
  const [items, setItems] = useState();
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    // setItems("");
  };

  const handleBack = () => {
    setPressed(false);
  };
  console.log(items);
  return (
    <View>
      {pressed ? (
        <ApiCalling ingredients={items} handle={handleBack} />
      ) : (
        <View>
          <Text>hi this is main screen</Text>
          <TextInput
            placeholder="Enter Your Ingredeints"
            style={styles.InputBox}
            value={items}
            onChangeText={setItems}
          />
          <Button title="Search" onPress={handlePress} />
        </View>
      )}
    </View>
  );
}
export default MainScreen;

const styles = StyleSheet.create({
  InputBox: {
    width: 300,
    height: 50,
    border: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
  },
});
