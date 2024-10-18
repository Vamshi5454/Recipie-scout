import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./components/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Recipie finder App</Text> */}
      {/* <StatusBar style="auto" /> */}
      <MainScreen />
    </View>
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
