import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

export type StackNavigatorParamList = {
  BottomNav: undefined;
  FullCar: {
    name: string;
    imgUrl: string;
    category: string;
    number: string;
    id: string;
  };
};

export type BottomNavigatorParamList = {
  Home: undefined;
  Map: undefined;
  Settings: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  StackNavigatorParamList,
  "BottomNav"
>;

export type FullCarScreenNavigationProp = NativeStackScreenProps<
  StackNavigatorParamList,
  "FullCar"
>;
