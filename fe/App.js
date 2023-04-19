import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ProductScreen from "./src/screens/ProductScreen";
import CartScreen from "./src/screens/CartScreen";
import ViewProductsScreen from "./src/screens/AdminScreens/ViewProductsScreen";
import ViewCustomersScreen from "./src/screens/AdminScreens/ViewCustomersScreen";
import AddProductScreen from "./src/screens/AdminScreens/AddProductScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as AccountProvider } from "./src/context/AccountContext";
import { Provider as AdminProvider } from "./src/context/AdminContext";
import { navigationRef } from "./src/navigationRef";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";

const AuthStack = createNativeStackNavigator();
const MainFlowTabsNav = createBottomTabNavigator();
const AdminFlowTabsNav = createBottomTabNavigator();

const AdminFlowTabs = () => {
  return (
    <AdminFlowTabsNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "View Customers") {
            iconName = "users";
          }
          if (route.name === "View Products") {
            iconName = "home";
          }
          if (route.name === "Update Products") {
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
      <AdminFlowTabsNav.Screen
        name="View Products"
        component={ViewProductsScreen}
        options={{ headerShown: false }}
      />
      <AdminFlowTabsNav.Screen
        name="Update Products"
        component={AddProductScreen}
        options={{ headerShown: false }}
      />
      <AdminFlowTabsNav.Screen
        name="View Customers"
        component={ViewCustomersScreen}
        options={{ headerShown: false }}
      />
    </AdminFlowTabsNav.Navigator>
  );
};

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
    <AdminProvider>
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
              <AuthStack.Screen
                name="AdminFlowTabs"
                component={AdminFlowTabs}
              />
            </AuthStack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </AuthProvider>
      </AccountProvider>
    </AdminProvider>
  );
}
