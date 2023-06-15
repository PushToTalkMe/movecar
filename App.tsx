import { StatusBar } from "react-native";
import { View } from "react-native";
import { Car } from "./src/components/car/car";
import { Provider } from "react-redux";
import { store } from "./src/store/index";
import { useTypedSelector } from "./src/hooks/use_typed_selector";

export default function App() {
  const listCars = useTypedSelector((state) => state.listCarsReducer);

  return (
    <Provider store={store}>
      <View>
        {listCars.listCars.map((car) => (
          <Car
            title={car.title}
            name={car.name}
            id={car.id}
            key={car.id}
            imgUrl={car.imgUrl}
          />
        ))}
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
    </Provider>
  );
}
