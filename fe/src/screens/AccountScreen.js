import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { Context as AccountContext } from "../context/AccountContext";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const { signout } = useContext(AuthContext);
  const { updateCardDetails, updateAddress } = useContext(AccountContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.address}>
        <Text style={styles.subtitle}>Enter your shipping address</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Address Line 1 "
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newAddressLine1) => {
            setAddressLine1(newAddressLine1);
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Address Line 2"
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newAddressLine2) => {
            setAddressLine2(newAddressLine2);
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Postcode"
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newPostcode) => {
            setPostcode(newPostcode);
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Country"
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newCountry) => {
            setCountry(newCountry);
          }}
        />
        <Button
          title="Save Shipping Address"
          onPress={() => {
            updateAddress({ addressLine1, addressLine2, postcode, country });
          }}
        />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.subtitle}>Enter your payment details</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Card Number"
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newCardNumber) => {
            setCardNumber(newCardNumber);
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Expiry Date"
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newExpiryDate) => {
            setExpiryDate(newExpiryDate);
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="CVV"
          placeholderTextColor={"#cccccc"}
          style={styles.input}
          onChangeText={(newCvv) => {
            setCvv(newCvv);
          }}
        />
        <Button
          title="Save Payment Details"
          onPress={() => {
            updateCardDetails({ cardNumber, expiryDate, cvv });
          }}
        />
      </View>
      <Button title="Sign Out" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    marginBottom: 50,
    fontStyle: "bold",
  },
  address: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  cardDetails: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    marginBottom: 5,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 5,
  },
});

export default AccountScreen;
