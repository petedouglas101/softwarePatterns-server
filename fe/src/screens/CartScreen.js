import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { Context as OrderContext } from "../context/OrderContext";

const CartScreen = () => {
  const route = useRoute();
  const productsInCart = route.params.productArray;
  const { state, submitOrder } = useContext(OrderContext);
  let total = 0;
  productsInCart.forEach((product) => {
    total += product.productPrice;
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={productsInCart}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem style={styles.listItem}>
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>
                    {item.productName}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}>
                    {"€ " + item.productPrice}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle style={styles.subtitle}>
                    {item.manufacturerName}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
      <Text>Total: {"€ " + total}</Text>
      <Button
        title="Submit Order"
        onPress={() => {
          submitOrder(productsInCart);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5A5A5A",
  },

  button: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#6699CC",
    alignSelf: "center",
    elevation: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  headline: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    color: "#cccccc",
  },
  overall: {
    flex: 1,
    backgroundColor: "#5A5A5A",
    marginTop: 30,
  },
});

export default CartScreen;
