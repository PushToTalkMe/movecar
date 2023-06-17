import { StyleSheet } from "react-native";
import { HomeScreenNavigationProp } from "./types";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { IListCars } from "../../interfaces/list_cars.interface";
import { Car } from "../components/car/car";
import { getIcon } from "../../helpers/getIcon";

export default function Map({ navigation }: HomeScreenNavigationProp) {
  const cars: IListCars = useTypedSelector((state) => state.listCarsReducer);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 55.751244,
        longitude: 37.618423,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      {cars.currentCars.map((item) => {
        return (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.coordinates.latitude,
              longitude: item.coordinates.longitude,
            }}
            image={getIcon(item.category)}
          >
            <Callout
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
              <Car name={item.name} id={item.id} category={item.category} />
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
