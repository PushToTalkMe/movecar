import { useEffect } from "react";
import { View, StyleSheet, Button, Linking } from "react-native";
import styled from "styled-components/native";
import { FullCarScreenNavigationProp } from "./types";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { getIcon } from "../../helpers/getIcon";

export const FullCar = ({ route, navigation }: FullCarScreenNavigationProp) => {
  const { name, imgUrl, category, number, id, coordinates } = route.params;
  const text =
    "Добрый+день%2C+подскажите+пожалуйста%2C+какой+номер+заказа+у+вас+сейчас+в+работе";
  useEffect(() => {
    navigation.setOptions({
      title: `ТС #${id}`,
    });
  });

  return (
    <View style={{ padding: 20 }}>
      <CarImage source={{ uri: imgUrl }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          }}
          image={getIcon(category)}
        ></Marker>
      </MapView>
      <CarText>Категория ТС: {category}</CarText>
      <CarText>Имя водителя: {name}</CarText>
      <CarText>Контактный номер водителя: {number} </CarText>
      <CallButton>
        <Button
          onPress={() => Linking.openURL(`tel:${number}`)}
          title="Позвонить"
          color="blue"
        />
      </CallButton>

      <MessageButton>
        <Button
          onPress={() =>
            Linking.openURL(
              `https://api.whatsapp.com/send/?phone=${number}&text=${text}`
            )
          }
          title="Написать (What's App)"
          color="green"
        />
      </MessageButton>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "20%",
  },
});

const CarImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CarText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  margin-top: 5px;
`;

const CallButton = styled.View`
  margin-top: 10px;
`;

const MessageButton = styled.View`
  margin-top: 10px;
`;
