import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import { FullCar } from "./full_car";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Список ТС" }}
        />
        <Stack.Screen
          name="FullCar"
          component={FullCar}
          options={{ title: "ТС" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
