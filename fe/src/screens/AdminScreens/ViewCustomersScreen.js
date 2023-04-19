import React, { useContext } from "react";
import { Context as AdminContext } from "../../context/AdminContext";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "@rneui/themed";
import * as RootNavigation from "../../navigationRef";

// create a component
const ViewCustomersScreen = () => {
  const { state, getCustomers } = useContext(AdminContext);

  console.log("Customers from ViewCustomersScreen: ", state);

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.headline}>Customers</Text>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  RootNavigation.navigate("CustomerDetailsScreen", { item });
                }}
              >
                <ListItem style={styles.listItem}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.title}>
                      {item.firstName + " " + item.lastName}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>
                      {item.email}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
        <Button title="Refresh" onPress={getCustomers} style={styles.button} />
      </View>
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

//make this component available to the app
export default ViewCustomersScreen;
