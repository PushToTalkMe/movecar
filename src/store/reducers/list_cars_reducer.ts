import carsRu from "../../data/data_list_cars_ru.json";
import carsEn from "../../data/data_list_cars_en.json";
import { IListCars } from "../../../interfaces/list_cars.interface";
import { ICar } from "../../../interfaces/car.interface";

const FILTER_CATEGORY = "FILTER_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";
const CHANGE_DATA = "CHANGE_DATA";

const initialState = <IListCars>{
  listCars: carsRu,
  currentCars: carsRu,
  currentCategory: "Все",
  filterCategory() {
    return {
      ...this,
      currentCars: this.listCars.filter((car: ICar) =>
        car.category.includes(this.currentCategory)
      ),
    };
  },
};

export const listCarsReducer = (
  state = initialState,
  action: { payload: string; type: string }
) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return (state = Object.assign({}, state, {
        currentCategory: action.payload,
      }));
    case CHANGE_DATA:
      if (action.payload === "ru") {
        return (state = Object.assign({}, state, {
          listCars: carsRu,
          currentCars: carsRu,
        }));
      } else {
        return (state = Object.assign({}, state, {
          listCars: carsEn,
          currentCars: carsEn,
        }));
      }
    case FILTER_CATEGORY:
      if (state.currentCategory === "Все" || state.currentCategory === "All") {
        return (state = Object.assign({}, state, {
          currentCars: state.listCars,
        }));
      } else {
        return state.filterCategory();
      }
    default:
      return state;
  }
};
