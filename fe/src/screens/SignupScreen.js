import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  navigation.addListener("blur", () => {
    clearErrorMessage();
  });

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        SignupScreen={true}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.link}>Already have an account? Sign in here</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.link}>Are you an Administrator? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  link: {
    color: "#cccccc",
    marginLeft: 15,
    marginTop: 15,
    paddingBottom: 10,
  },
});

export default SignupScreen;
