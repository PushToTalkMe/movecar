import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigatorParamList, BottomNavigatorParamList } from "./types";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "./home";
import { FullCar } from "./full_car";
import Map from "./map";
import Settings from "./settings";

// Screen names
const bottomName = "BottomNav";
const homeName = "Home";
const FullCarName = "FullCar";
const mapName = "Map";
const settingsName = "Settings";

const Stack = createNativeStackNavigator<StackNavigatorParamList>();
const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={bottomName}
          component={BottomNav}
          options={{ title: "Список ТС", headerShown: false }}
        />
        <Stack.Screen
          name={FullCarName}
          component={FullCar}
          options={{ title: "ТС" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === mapName) {
            iconName = focused ? "map" : "map-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={mapName} component={Map} />
      <Tab.Screen name={settingsName} component={Settings} />
    </Tab.Navigator>
  );
};
