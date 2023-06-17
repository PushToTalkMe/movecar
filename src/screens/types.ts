import type { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackNavigatorParamList = {
  Home: undefined;
  FullCar: {
    name: string;
    imgUrl: string;
    category: string;
    number: string;
    id: string;
  };
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  StackNavigatorParamList,
  "Home"
>;

export type FullCarScreenNavigationProp = NativeStackScreenProps<
  StackNavigatorParamList,
  "FullCar"
>;
