import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handleButtonClick = () => {
    console.log("sa4dasd65");
  };

  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <StatusBar style="auto" />
      <Button title="Generate exception " onPress={handleButtonClick} />
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
