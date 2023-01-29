import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { ExceptionModel } from "./models/exceptionModel";
import { logCurrentExceptions } from "./services/exceptionLoggerServie";

export default function App() {
  const errors = [];
  const handleButtonClick = () => {
    console.log("d4as65d45s6a");
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

      console.log(errors);
    }
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     logCurrentExceptions(errors);
  //   }, 6000);
  // }, []);

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
