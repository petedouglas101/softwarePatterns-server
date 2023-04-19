import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, ButtonGroup } from "@rneui/themed";

const AuthForm = ({
  errorMessage,
  onSubmit,
  submitButtonText,
  SignupScreen,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const role = selectedIndex === 0 ? "Customer" : "Administrator";

  return (
    <>
      {SignupScreen ? (
        <>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              value={firstName}
              onChangeText={(newFirstName) => setFirstName(newFirstName)}
              autoCorrect={false}
              placeholder="First Name"
              placeholderTextColor={"#cccccc"}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              value={lastName}
              onChangeText={(newLastName) => setLastName(newLastName)}
              autoCorrect={false}
              placeholder="Last Name"
              placeholderTextColor={"#cccccc"}
            />
          </View>
        </>
      ) : null}
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          placeholderTextColor={"#cccccc"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          secureTextEntry
          value={password}
          onChangeText={(newPassword) => setPassword(newPassword)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor={"#cccccc"}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {SignupScreen ? (
        <ButtonGroup
          buttons={["Customer", "Administrator"]}
          selectedIndex={selectedIndex}
          onPress={(index) => setSelectedIndex(index)}
        />
      ) : null}
      <View style={styles.buttonView}>
        <Button
          title={submitButtonText}
          onPress={() =>
            onSubmit({ email, password, firstName, lastName, role })
          }
          color={"#6699CC"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: (10, 10, 0, 10),
  },
  buttonView: {
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default AuthForm;
