import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font"

const Stack = createNativeStackNavigator();

const styledTheme = {
  colors: {
    color1: "#7A70DD",
    color2: "#1D1D1D",
    color3: "#F6F5FF",
    color4: "#C1BDE5"
  },
  res: {
    screenHeight,
    screenWidth
  }
};

const nativeTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F6F5FF",
  },
};

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width


export default function App() {
  useFonts({
    'Gilroy-Extra' : require("./assets/Gilroy-ExtraBold.otf"),
    'Gilroy-Light' : require("./assets/Gilroy-Light.otf") 
  })
  return (
    <ThemeProvider theme={styledTheme}>
      <NavigationContainer theme={nativeTheme}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
