import styled from "styled-components/native";
import { CarProps } from "./car.props";
import { useTypedSelector } from "../../hooks/use_typed_selector";

export const Car = ({ name, imgUrl, id, category }: CarProps): JSX.Element => {
  const ln = useTypedSelector((state) => state.settingsReducer.language);
  return (
    <CarView>
      {imgUrl ? (
        <CarImage
          source={{
            uri: imgUrl,
          }}
        />
      ) : null}
      <CarDetails>
        {ln === "ru" ? (
          <CarTitle>ТС #{id}</CarTitle>
        ) : (
          <CarTitle>Vehicle #{id}</CarTitle>
        )}
        <CarCategory>{category}</CarCategory>
        <CarOwner>{name}</CarOwner>
      </CarDetails>
    </CarView>
  );
};

const CarView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const CarImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const CarTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const CarOwner = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const CarCategory = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
`;

const CarDetails = styled.View`
  justify-content: center;
`;
