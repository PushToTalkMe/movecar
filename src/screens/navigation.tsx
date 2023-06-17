import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigatorParamList, BottomNavigatorParamList } from "./types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTypedSelector } from "../hooks/use_typed_selector";

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
  const ln = useTypedSelector((state) => state.settingsReducer.language);
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
          options={ln === "ru" ? { title: "ТС" } : { title: "Vehicle" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomNav = () => {
  const ln = useTypedSelector((state) => state.settingsReducer.language);

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
      <Tab.Screen
        name={homeName}
        component={Home}
        options={
          ln === "ru" ? { title: "Список ТС" } : { title: "List of vehicles" }
        }
      />
      <Tab.Screen
        name={mapName}
        component={Map}
        options={ln === "ru" ? { title: "Карта" } : { title: "Map" }}
      />
      <Tab.Screen
        name={settingsName}
        component={Settings}
        options={ln === "ru" ? { title: "Настройки" } : { title: "Settings" }}
      />
    </Tab.Navigator>
  );
};
