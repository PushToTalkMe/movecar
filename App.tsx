import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Car } from "./src/components/car/car";

export default function App() {
  return (
    <View>
      <Car
        title="Лада Калина"
        name="Иван Иванов"
        id="435232"
        imageUrl="https://rg.ru/uploads/images/176/28/49/autowp.ru_vaz_21045__zhiguli__1.jpg"
      />
    </View>
  );
}
