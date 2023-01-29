import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { ExceptionModel } from "./models/exceptionModel.js";
import { logCurrentExceptions } from "./services/exceptionLoggerService.js";
import { useLoggerExceptions } from "./hooks/useLoggerExceptions.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { VALUES } from "./constants/values.js";

import { addItem, getItem } from "./utils/localStorageUtil.js";
import { useEffect } from "react";

export default function App() {
  const error = useLocalStorage(VALUES.LOCAL_STORAGE_ERR_KEY);
  useLoggerExceptions(error);

  const generateNewException = async () => {
    try {
      console.log(setState());
    } catch (error) {
      const { name, message, stack } = error;
      const fullDate = new Date();
      const shortDate = fullDate.toLocaleDateString();

      const newException = new ExceptionModel(
        name,
        stack,
        message,
        shortDate,
        fullDate
      );

      await addItem(VALUES.LOCAL_STORAGE_ERR_KEY, newException);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      let errors = await getItem("errors");
      if (errors) {
        logCurrentExceptions(errors);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
