import styled from "styled-components/native";
import { CarProps } from "./car.props";

export const Car = ({ name, imgUrl, id }: CarProps): JSX.Element => {
  return (
    <CarView>
      <CarImage
        source={{
          uri: imgUrl,
        }}
      />
      <CarDetails>
        <CarTitle>ТС #{id}</CarTitle>
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

const CarDetails = styled.View`
  justify-content: center;
`;
