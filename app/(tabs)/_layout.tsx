import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from "expo-router";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Details from "./Details";


const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Details" />
    </Tabs>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="Home"
    //       component={Home}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <Ionicons name="home-outline" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Details"
    //       component={Details}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <Ionicons name="download" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="SearchPage"
    //       component={SearchPage}
    //       options={{
    //         tabBarIcon: ({ color, size }) => (
    //           <Ionicons name="search" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
