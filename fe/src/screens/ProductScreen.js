import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AccountContext } from "../context/AccountContext";

const ProductScreen = () => {
  const { getEmail } = useContext(AccountContext);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          getEmail({ email: "peter@email.com" });
        }}
        title="Get Email"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default ProductScreen;
