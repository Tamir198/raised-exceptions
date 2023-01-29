import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import axios from "axios";

import { ExceptionModel } from "./models/exceptionModel.js";
import { logCurrentExceptions } from "./services/exceptionLoggerService.js";
import { useLoggerExceptions } from "./hooks/useLoggerExceptions.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { VALUES } from "./constants/values.js";

export default function App() {
  const error = useLocalStorage(VALUES.LOCAL_STORAGE_ERR_KEY);

  console.log(error);

  useLoggerExceptions(error);

  const handleButtonClick = () => {
    try {
      console.log(setState());
    } catch (error) {
      const { name, message, stack } = error;
      const creationTime = new Date();
      errors.push(
        new ExceptionModel(
          name,
          stack,
          message,
          creationTime.toLocaleDateString(),
          creationTime
        )
      );

      logCurrentExceptions(JSON.stringify({ errors: JSON.stringify(errors) }));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Click me to generate errors</Text>
      <StatusBar style="auto" />
      <Button title="Generate exception" onPress={handleButtonClick} />
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
