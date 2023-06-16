import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Car } from "../components/car/car";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { IListCars } from "../../interfaces/list_cars.interface";

export default function Home({ navigation }) {
  const cars: IListCars = useTypedSelector((state) => state.listCarsReducer);
  return (
    <View>
      <FlatList
        data={cars.listCars}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullCar", {
                name: item.name,
                id: item.id,
                imgUrl: item.imgUrl,
                category: item.category,
                number: item.number,
              })
            }
          >
            <Car name={item.name} id={item.id} imgUrl={item.imgUrl} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
