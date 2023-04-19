import { Button } from "@rneui/base";
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context as AdminContext } from "../../context/AdminContext";

// create a component
const AddProductScreen = () => {
  const { state, addProduct, updateStock } = useContext(AdminContext);
  const [productName, setProductName] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddProductScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        placeholderTextColor={"#cccccc"}
        onChangeText={(newText) => setProductName(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Manufacturer Name"
        placeholderTextColor={"#cccccc"}
        onChangeText={(newText) => setManufacturerName(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Category"
        placeholderTextColor={"#cccccc"}
        onChangeText={(newText) => setProductCategory(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price (€)"
        placeholderTextColor={"#cccccc"}
        inputMode="numeric"
        onChangeText={(newText) => setProductPrice(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Image"
        placeholderTextColor={"#cccccc"}
        onChangeText={(newText) => setProductImage(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        placeholderTextColor={"#cccccc"}
        inputMode="numeric"
        onChangeText={(newText) => setAmount(newText)}
      />
      <Button
        title="Add Product"
        onPress={() => {
          addProduct({
            productName,
            manufacturerName,
            productCategory,
            productPrice,
            productImage,
            amount,
          });
        }}
      />
      <Button
        title="Update Stock"
        onPress={() => {
          updateStock({ productName, amount });
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

//make this component available to the app
export default AddProductScreen;
