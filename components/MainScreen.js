import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  useAnimatedValue,
} from "react-native";
import ApiCalling from "./ApiCalling";

import { useNavigation } from "@react-navigation/native";

function MainScreen() {
  const [items, setItems] = useState();
  //   const [pressed, setPressed] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    // setPressed(true);
    // setItems("");
    navigation.navigate("ApiCalling", (ingredients = { items }));
  };

  //   const handleBack = () => {
  //     // setPressed(false);
  //   };
  console.log(items);
  return (
    <View style={styles.container}>
      <Text>hi this is main screen</Text>
      <TextInput
        placeholder="Enter Your Ingredeints"
        style={styles.InputBox}
        value={items}
        onChangeText={setItems}
      />
      <Button title="Search" onPress={handlePress} />
    </View>
  );
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    padding: 60,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  InputBox: {
    width: 300,
    height: 50,
    border: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
  },
});
