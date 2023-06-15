import styled from "styled-components/native";
import { CarProps } from "./car.props";

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

export const Car = ({ title, name, imageUrl, id }: CarProps): JSX.Element => {
  return (
    <CarView>
      <CarImage
        source={{
          uri: imageUrl,
        }}
      />
      <CarDetails>
        <CarTitle>
          {title} #{id}
        </CarTitle>
        <CarOwner>{name}</CarOwner>
      </CarDetails>
    </CarView>
  );
};
