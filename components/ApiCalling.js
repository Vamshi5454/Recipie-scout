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
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

function ApiCalling({ route }) {
  const {
    ingredients: { items },
  } = route.params;

  console.log(items);
  const [recipies, setRecipies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchRecipe = async (items) => {
    // console.log("in the function");
    // console.log(API_KEY);
    // console.log(items);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${items}&apiKey=${API_KEY}`
      );
      setRecipies(response.data);
      //   console.log(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (items) {
      fetchRecipe(items);
    }
  }, [items]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleItem = (id) => {
    navigation.navigate("IngredientsScreen", { PressedItem: { id } });
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text>{items}</Text>
      <FlatList
        style={styles.resultItems}
        data={recipies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.resItem}
            onPress={() => handleItem(item.id)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Back" onPress={handleBack} style={styles.btn} />
    </View>
  );
}

export default ApiCalling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btn: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 10,
    left: 10,
  },
  resultItems: {
    paddingTop: 100,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  resItem: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "blue",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
});
