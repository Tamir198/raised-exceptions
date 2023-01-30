import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { generateNewException } from "./utils/generateNewException.js";

import { useLoggerExceptions } from "./hooks/useLoggerExceptions.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { useIntervalLogger } from "./hooks/useIntervalLogger.js";

import { VALUES } from "./constants/values.js";

export default function App() {
  const error = useLocalStorage(VALUES.LOCAL_STORAGE_ERR_KEY);

  useLoggerExceptions(error);
  useIntervalLogger(VALUES.FILE_INTERVALS);

  return (
    <View style={styles.container}>
      <Text>Click me to generate errors</Text>
      <StatusBar style="auto" />
      <Button title="Generate exception" onPress={generateNewException} />
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
