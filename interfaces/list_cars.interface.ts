//Интерфейс для Redux, list_cars_reducer

import { ICar } from "./car.interface";

export interface IListCars {
  listCars: ICar[];
  currentCars: ICar[];
  currentCategory: string;
  currentLanguage: "ru" | "en";
  filterCategory: () => IListCars;
}
