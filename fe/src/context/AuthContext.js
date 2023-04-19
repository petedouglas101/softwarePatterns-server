import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import appApi from "../api/server";
import * as RootNavigation from "../navigationRef";
import Customer from "../../classes/Customer";
import User from "../../classes/User";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      RootNavigation.navigate("MainFlowTabs");
    } else {
      RootNavigation.navigate("Signin");
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signup = (dispatch) => {
  return async (user) => {
    try {
      const newUser = new User(user);
      const response = await appApi.post("/signup", {
        newUser,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      if (response.data.user.role === "Customer") {
        RootNavigation.navigate("MainFlowTabs");
      } else {
        RootNavigation.navigate("AdminFlowTabs");
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await appApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      if (response.data.customer) {
        RootNavigation.navigate("MainFlowTabs");
      } else {
        RootNavigation.navigate("AdminFlowTabs");
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    RootNavigation.navigate("Signup");
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
