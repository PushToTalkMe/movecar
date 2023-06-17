import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Car } from "../components/car/car";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { IListCars } from "../../interfaces/list_cars.interface";
import { HomeScreenNavigationProp } from "./types";

export default function Home({ navigation }: HomeScreenNavigationProp) {
  const cars: IListCars = useTypedSelector((state) => state.listCarsReducer);
  return (
    <View>
      <FlatList
        data={cars.currentCars}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullCar", {
                name: item.name,
                id: item.id,
                imgUrl: item.imgUrl,
                category: item.category,
                number: item.number,
                coordinates: item.coordinates,
              })
            }
          >
            <Car
              name={item.name}
              id={item.id}
              imgUrl={item.imgUrl}
              category={item.category}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
