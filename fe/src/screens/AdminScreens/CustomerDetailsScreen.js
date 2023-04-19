import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

const CustomerDetailsScreen = () => {
  const route = useRoute();
  const customer = route.params.item;
  const previousOrders = customer.previousOrders;
  console.log("Customer from CustomerDetailsScreen: ", customer);
  const renderItem = ({ item }) => {
    // Calculate total price for the order
    const total = item.products.reduce((sum, product) => {
      return sum + product.productPrice;
    }, 0);

    return (
      <View style={styles.orderContainer}>
        <Text style={styles.orderId}>Order ID: {item._id}</Text>
        <Text style={styles.orderTotal}>Total: ${total}</Text>
        <Text style={styles.orderProducts}>
          Products:{" "}
          {item.products.map((product) => product.productName).join(", ")}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={previousOrders}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  orderContainer: {
    marginBottom: 16,
  },
  orderId: {
    fontWeight: "bold",
  },
  orderTotal: {
    marginTop: 4,
  },
  orderProducts: {
    marginTop: 4,
  },
});
export default CustomerDetailsScreen;
