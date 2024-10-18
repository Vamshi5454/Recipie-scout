import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { API_KEY } from "@env";
import { useState } from "react";

console.log(process.env.API_KEY);
// console.log(API_KEY);
function ApiCalling({ ingredients, handle }) {
  const [recipies, setRecipies] = useState([]);
  const [error, setError] = useState(null);

  //   const handleBack = () => {};

  const fetchRecipe = async (ingredients) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`
      );
      const data = await response.json();

      setRecipies(data);
      console.log(data);
    } catch (err) {
      //   console.log(err);
      setError(err);
    }
  };

  //   console.log(error);

  fetchRecipe(ingredients);
  return (
    <View style={styles.container}>
      <Text>{ingredients}</Text>
      <FlatList
        data={recipies}
        renderItem={({ item }) => (
          //   <TouchableOpacity>
          <Text>{item.title}</Text>
          //   </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
  //   btn: {
  //     position: "absolute",
  //     top: Platform.OS === "ios" ? 50 : 10,
  //     left: 10,
  //   },
});
