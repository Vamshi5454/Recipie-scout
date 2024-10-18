import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { API_KEY } from "@env";
import { useState } from "react";

function ApiCalling({ ingredients, handle }) {
  const [recipes, setRecipies] = useState();

  //   const handleBack = () => {};

  const fetchRecipe = async (ingredients) => {
    try {
      const responce = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=YOUR_API_KEY`
      );
      const data = await responce.json();
      setRecipies(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(recipes);

  return (
    <View style={styles.container}>
      <Text>{ingredients}</Text>
      <Button title="back" onPress={handle} style={styles.btn} />
    </View>
  );
}

export default ApiCalling;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: "flex-start",
  //     justifyContent: "flex-start",
  //   },
  btn: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 10,
    left: 10,
  },
});
