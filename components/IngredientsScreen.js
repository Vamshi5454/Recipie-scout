import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_KEY } from "@env";
// import { useState } from "react";

function IngredeintsScreen({ route }) {
  const {
    PressedItem: { id },
  } = route.params;

  const [ItemFromId, setItemFromId] = useState([]);

  const navigation = useNavigation();

  const findById = async (id) => {
    try {
      //   const responce = await axios.get(
      //     `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${id}&apiKey=${API_KEY}`
      //   );
      const responce = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`
      );

      setItemFromId(responce.data.extendedIngredients);
      console.log(ItemFromId);
      //   console.log(responce.data.extendedIngredients);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    findById(id);
  }, [ItemFromId]);
  //   console.log(id);

  return (
    <View style={styles.container}>
      <FlatList
        data={ItemFromId.extendedIngredients}
        renderItem={({ item }) => (
          <View>
            <Text>Got an Api calling issue</Text>
          </View>
        )}
        // keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>{id}</Text>

      <Button title="Back" onPress={handleBack} style={styles.btn} />
    </View>
  );
}
import { useEffect, useState } from "react";

export default IngredeintsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
