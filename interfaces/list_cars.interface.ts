import { ICar } from "./car.interface";

export interface IListCars {
  listCars: ICar[];
  currentCars: ICar[];
  currentCategory: string;
  filterCategory: () => void;
}
