//Экран списка ТС и сортировки. При нажатии на элемент списка будет произведён переход на экран ТС с подробной информацией

import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Car } from "../components/car/car";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { IListCars } from "../../interfaces/list_cars.interface";
import { HomeScreenNavigationProp } from "./types";
import { Sort } from "../components/sort/sort";

export default function Home({ navigation }: HomeScreenNavigationProp) {
  const cars: IListCars = useTypedSelector((state) => state.listCarsReducer);
  return (
    <SafeAreaView style={styles.container}>
      <Sort />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
