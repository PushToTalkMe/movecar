import { View } from "react-native";
import styled from "styled-components/native";
import { HomeScreenNavigationProp } from "./types";

export default function Settings({ navigation }: HomeScreenNavigationProp) {
  return (
    <View>
      <MapText>Настройка</MapText>
    </View>
  );
}

const MapText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
