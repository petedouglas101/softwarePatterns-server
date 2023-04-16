import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ProductScreen from "./src/screens/ProductScreen";
import CartScreen from "./src/screens/CartScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as AccountProvider } from "./src/context/AccountContext";
import { navigationRef } from "./src/navigationRef";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";

const AuthStack = createNativeStackNavigator();
const MainFlowTabsNav = createBottomTabNavigator();

const MainFlowTabs = () => {
  return (
    <MainFlowTabsNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Account") {
            iconName = "users";
          }
          if (route.name === "Product") {
            iconName = "home";
          }
          if (route.name === "Cart") {
            iconName = "shopping-cart";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6699CC",
        tabBarInactiveTintColor: "#D3D3D3",
        tabBarStyle: {
          backgroundColor: "#36454F",
        },
        headerShown: false,
      })}
    >
      <MainFlowTabsNav.Screen
        name="Product"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <MainFlowTabsNav.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <MainFlowTabsNav.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </MainFlowTabsNav.Navigator>
  );
};

const RootNavigation = navigationRef;

export default function App() {
  return (
    <AccountProvider>
      <AuthProvider>
        <StatusBar />
        <NavigationContainer ref={navigationRef}>
          <AuthStack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#6699CC" },
              contentStyle: { backgroundColor: "#5A5A5A" },
              headerTintColor: "#36454F",
            }}
          >
            <AuthStack.Screen name="Signup" component={SignupScreen} />
            <AuthStack.Screen name="Signin" component={SigninScreen} />
            <AuthStack.Screen name="MainFlowTabs" component={MainFlowTabs} />
          </AuthStack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </AuthProvider>
    </AccountProvider>
  );
}
