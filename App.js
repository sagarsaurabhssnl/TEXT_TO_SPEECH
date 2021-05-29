import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Button, ThemeProvider, Avatar, ListItem } from 'react-native-elements';
import HomeScreen from "./screens/homeScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Stack.Navigator initialRouteName="TEXT TO SPEECH">
        <Stack.Screen name="TEXT TO SPEECH" component={HomeScreen} options={option} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var option = {
  headerStyle: {
    backgroundColor: "#444",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  headerTintColor: "#fff",
};
