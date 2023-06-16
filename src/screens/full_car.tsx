import { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const CarImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CarText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullCar = ({ route, navigation }) => {
  const { name, imgUrl, category, number, id } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `ТС #${id}`,
    });
  });

  return (
    <View style={{ padding: 20 }}>
      <CarImage source={{ uri: imgUrl }} />
      <CarText>Карта</CarText>
      <CarText>Категория ТС: {category}</CarText>
      <CarText>Имя водителя: {name}</CarText>
      <CarText>Контактный номер водителя: {number} </CarText>
      <CarText>
        Кнопка позвонить(Открывает приложение с набором номера и уже
        подставленным номером водителя;)
      </CarText>
      <CarText>
        Кнопка написать( Открывает приложение whatsapp с чатом водителя и
        предустановленным сообщением: “Добрый день, подскажите пожалуйста, какой
        номер заказа у вас сейчас в работе”.)
      </CarText>
    </View>
  );
};
