import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import axios from "axios";

import { ExceptionModel } from "./models/exceptionModel";
import { logCurrentExceptions } from "./services/exceptionLoggerService.js";
import { useLoggerExceptions } from "./hooks/useLoggerExceptions.js";

export default function App() {
  const errors = [
    {
      errorName: "Can't find variable: setState",
      errorStack: "This is the error stack",
      errorMessage: "This ie error errorMessage",
      creationTime: "29-3-2020",
      detailedCreationTime:
        "Sun Jan 29 2023 16:23:06 GMT+0200 (Israel Standard Time)",
    },
    {
      errorName: "Can't find variable: setState",
      errorStack: "This is the error stack",
      errorMessage: "This ie error errorMessage",
      creationTime: "29-3-2021",
      detailedCreationTime:
        "Sun Jan 29 2023 16:23:06 GMT+0200 (Israel Standard Time)",
    },
  ];

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

  useLoggerExceptions(errors);

  // useEffect(() => {
  //   // setInterval(() => {
  //   //TODO get and save this errors in a file, use this use effect send recent error
  //   //Clear the errors array after sending them
  //   //Handle click + send the errors to the server - currently network error
  //   //
  //   if (errors.length > 0) {
  //     logCurrentExceptions(errors);
  //   }
  //   // }, 6000);
  // }, []);

  async function testAxios() {
    let data = JSON.stringify({
      errors: [
        {
          errorName: "Can't find variable: setState",
          errorStack: "This is the error stack",
          errorMessage: "This ie error errorMessage",
          creationTime: "29-3-2020",
          detailedCreationTime:
            "Sun Jan 29 2023 16:23:06 GMT+0200 (Israel Standard Time)",
        },
        {
          errorName: "Can't find variable: setState",
          errorStack: "This is the error stack",
          errorMessage: "This ie error errorMessage",
          creationTime: "29-3-2021",
          detailedCreationTime:
            "Sun Jan 29 2023 16:23:06 GMT+0200 (Israel Standard Time)",
        },
      ],
    });

    var config = {
      method: "post",
      url: "http://localhost:9000/api/exceptions",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // testAxios();

  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <StatusBar style="auto" />
      <Button title="Generate exception " onPress={testAxios} />
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
