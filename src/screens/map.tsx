import { StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { HomeScreenNavigationProp } from "./types";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { IListCars } from "../../interfaces/list_cars.interface";
import { Car } from "../components/car/car";

export default function Map({ navigation }: HomeScreenNavigationProp) {
  const cars: IListCars = useTypedSelector((state) => state.listCarsReducer);

  const getIcon = (category: string) => {
    if (category === "Пассажирский") {
      return require("../../assets/car_sedan.png");
    } else if (category === "Грузовой") {
      return require("../../assets/car_truck.png");
    } else {
      return require("../../assets/car_camping.png");
    }
  };

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
