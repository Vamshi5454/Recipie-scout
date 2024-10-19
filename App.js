import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./components/MainScreen";
import ApiCalling from "./components/ApiCalling";
import IngredeintsScreen from "./components/IngredientsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ApiCalling"
          component={ApiCalling}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IngredientsScreen"
          component={IngredeintsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
